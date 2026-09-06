"use client";

import { useEffect, useSyncExternalStore } from "react";

const storageKey = "clothmarket-saved-products";
const emptySaved: string[] = [];
let saved: string[] = [];
let hydrated = false;
const listeners = new Set<() => void>();
const subscribe = (listener: () => void) => { listeners.add(listener); return () => listeners.delete(listener); };
const emit = () => listeners.forEach((listener) => listener());
const hydrate = () => { if (hydrated) return; hydrated = true; try { const stored = window.localStorage.getItem(storageKey); saved = stored ? JSON.parse(stored) as string[] : []; } catch { saved = []; } emit(); };

export function useSavedStore() {
  useEffect(() => { const timer = window.setTimeout(hydrate, 0); return () => window.clearTimeout(timer); }, []);
  const value = useSyncExternalStore(subscribe, () => saved, () => emptySaved);
  const toggle = (id: string) => { saved = saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id]; window.localStorage.setItem(storageKey, JSON.stringify(saved)); emit(); };
  return { saved: value, toggle };
}
