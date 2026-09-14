export function shortProjectTitle(name: string): string {
  return name.replace(/^Referans\s+/, '').replace(/\s+Projesi$/, '');
}

export function statusLabel(status: string): string {
  return status === 'devam-eden' ? 'DEVAM EDEN' : 'TAMAMLANDI';
}

export function formatDateRange(startDate: string, endDate: string): string {
  if (startDate && endDate) return `${startDate} — ${endDate}`;
  if (startDate) return `${startDate} — Devam Ediyor`;
  return '';
}

export function splitLocation(location: string): { short: string; full: string } {
  const parts = location.split(' - ').map((part) => part.trim());
  if (parts.length === 2) {
    return { short: parts[0], full: `${parts[0]} / ${parts[1]}` };
  }
  return { short: location, full: location };
}
