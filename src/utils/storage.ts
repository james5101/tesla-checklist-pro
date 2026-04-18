import type { CategoryId } from '../data/checklist';

export type Status = 'pass' | 'flag' | 'skip';

export interface SavedModel {
  id: string;
  name: string;
  trim: string;
}

export interface InspectionSession {
  version: 1;
  model: SavedModel | null;
  vin: string;
  category: CategoryId;
  statuses: Record<string, Status>;
  notes: Record<string, string>;
  startedAt: string;
  updatedAt: string;
}

const KEY = 'tesla-inspection-v1';

export function loadSession(): InspectionSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as InspectionSession;
    if (parsed.version !== 1) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveSession(session: InspectionSession): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(session));
  } catch {
    // Quota exceeded or disabled — silent fail is fine; user still has in-memory state
  }
}

export function clearSession(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* no-op */
  }
}

export function formatRelative(iso: string, now = new Date()): string {
  const then = new Date(iso);
  const diffMs = now.getTime() - then.getTime();
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days === 1 ? '' : 's'} ago`;
  return then.toLocaleDateString();
}
