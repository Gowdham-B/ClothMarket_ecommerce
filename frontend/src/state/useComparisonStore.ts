"use client";

import { useEffect, useSyncExternalStore } from "react";

const storageKey = "clothmarket-comparison";
const emptyCompared: string[] = [];
let compared: string[] = [];
let hydrated = false;
const listeners = new Set<() => void>();
const subscribe = (listener: () => void) => { listeners.add(listener); return () => listeners.delete(listener); };
const emit = () => listeners.forEach((listener) => listener());
const hydrate = () => { if (hydrated) return; hydrated = true; try { const stored = window.localStorage.getItem(storageKey); compared = stored ? JSON.parse(stored) as string[] : []; } catch { compared = []; } emit(); };

export function useComparisonStore() {
  useEffect(() => { const timer = window.setTimeout(hydrate, 0); return () => window.clearTimeout(timer); }, []);
  const value = useSyncExternalStore(subscribe, () => compared, () => emptyCompared);
  const toggle = (id: string) => { if (!compared.includes(id) && compared.length === 3) return false; compared = compared.includes(id) ? compared.filter((item) => item !== id) : [...compared, id]; window.localStorage.setItem(storageKey, JSON.stringify(compared)); emit(); return true; };
  return { compared: value, toggle };
}
