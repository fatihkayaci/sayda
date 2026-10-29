// Site-wide motion: scroll reveals, word-by-word headings, image wipes, count-up numbers and the
// page-change curtain. Runs on first load and after every ClientRouter navigation.

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Images that are part of a hero, a logo strip or the lightbox keep their own behaviour.
const NO_IMAGE_WIPE = '.hero, .page-hero, .project-hero, .projects-hero, .svc-hero, .clients, dialog, [data-no-reveal]';

// Links that switch a tab in place (project filters, service pills) should feel instant, so no curtain.
const IN_PLACE_LINKS = 'a.svc-hero__pill, a.projects-filters__btn';

function onVisible(targets: Iterable<Element>, threshold: number, run: (el: Element) => void, rootMargin = '0px') {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        run(entry.target);
        io.unobserve(entry.target);
      });
    },
    { threshold, rootMargin }
  );
  for (const el of targets) io.observe(el);
}

// Wraps every word of a heading in a span, keeping inner markup such as <em>, <span> and <br>.
function splitWords(heading: HTMLElement) {
  let index = 0;
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode as Text);

  textNodes.forEach((node) => {
    const parts = node.data.split(/(\s+)/);
    if (!parts.some((part) => part.trim())) return;
    const fragment = document.createDocumentFragment();
    parts.forEach((part) => {
      if (!part) return;
      if (!part.trim()) {
        fragment.append(part);
        return;
      }
      const word = document.createElement('span');
      word.className = 'word';
      word.style.setProperty('--wi', String(index++));
      word.textContent = part;
      fragment.append(word);
    });
    node.replaceWith(fragment);
  });
  heading.dataset.wordsReady = '';
}

function isOnScreen(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight && rect.height > 0;
}

// Count-up numbers ([data-countup], not [data-count]: the project gallery uses that for its layout).
// The real value stays in the HTML until the number is on screen, then it counts up in 0.6s,
// so a page that is read or captured before the animation never shows a half-way figure.
function initCounters() {
  const counters = document.querySelectorAll<HTMLElement>('[data-countup]:not([data-counted])');
  counters.forEach((el) => (el.dataset.counted = ''));
  if (reducedMotion()) return;

  const format = (n: number, decimals: number) =>
    n.toLocaleString('tr-TR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping: false });

  onVisible(counters, 0.6, (target) => {
    const el = target as HTMLElement;
    const goal = Number(el.dataset.countup);
    const decimals = Number(el.dataset.decimals ?? 0);
    const duration = 600;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      el.textContent = format(goal * (1 - Math.pow(1 - t, 3)), decimals);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

function initMotion() {
  onVisible(document.querySelectorAll('.reveal:not(.in)'), 0.1, (el) => el.classList.add('in'));

  const headings = document.querySelectorAll<HTMLElement>('[data-words]:not([data-words-ready])');
  headings.forEach(splitWords);
  onVisible(headings, 0.3, (el) => el.classList.add('in'));

  // Only images still below the fold get the wipe, so nothing on the first screen is held back.
  const images = [...document.querySelectorAll<HTMLImageElement>('main img:not(.img-wipe)')].filter(
    (img) => !img.closest(NO_IMAGE_WIPE) && !isOnScreen(img)
  );
  if (!reducedMotion()) {
    // A fully clipped image counts as invisible to both lazy loading and IntersectionObserver,
    // so the image's box (its parent) is watched instead and lazy images are fetched a little early.
    const imagesIn = new Map<Element, HTMLImageElement[]>();
    images.forEach((img) => {
      img.classList.add('img-wipe');
      const box = img.parentElement!;
      imagesIn.set(box, [...(imagesIn.get(box) ?? []), img]);
    });
    onVisible(imagesIn.keys(), 0, (box) => imagesIn.get(box)!.forEach((img) => (img.loading = 'eager')), '600px 0px');
    onVisible(imagesIn.keys(), 0.15, (box) =>
      imagesIn.get(box)!.forEach((img) => {
        const show = () => img.classList.add('in');
        if (img.complete) show();
        else {
          img.addEventListener('load', show, { once: true });
          img.addEventListener('error', show, { once: true });
        }
      })
    );
  }

  initCounters();
}

// The first page waits for the splash, so the opening animations aren't spent behind it.
function start() {
  const w = window as { __saydaSplashDone?: boolean };
  if (!document.getElementById('splash') || w.__saydaSplashDone) initMotion();
  else window.addEventListener('sayda:splash-done', initMotion, { once: true });
}

start();
document.addEventListener('astro:after-swap', () => {
  // A new page arrives under the curtain: lift it.
  const curtain = document.querySelector<HTMLElement>('.curtain');
  if (!curtain?.classList.contains('is-in')) return;
  curtain.classList.replace('is-in', 'is-out');
  setTimeout(() => curtain.classList.remove('is-out'), 650);
});
// Every step above skips what it has already handled, so running again on the first load is harmless.
document.addEventListener('astro:page-load', start);

// Before a navigation, the curtain covers the screen; the new page is fetched meanwhile.
document.addEventListener('astro:before-preparation', (event) => {
  const curtain = document.querySelector<HTMLElement>('.curtain');
  if (!curtain || reducedMotion() || event.sourceElement?.closest(IN_PLACE_LINKS)) return;
  const load = event.loader;
  event.loader = async () => {
    curtain.classList.remove('is-out');
    curtain.getBoundingClientRect();
    curtain.classList.add('is-in');
    await Promise.all([load(), new Promise((resolve) => setTimeout(resolve, 450))]);
  };
});
