"use client";

import { useEffect, useSyncExternalStore } from "react";

const storageKey = "clothmarket-recently-viewed";
const emptyList: string[] = [];
let viewed: string[] = [];
let hydrated = false;
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const emit = () => listeners.forEach((listener) => listener());

const hydrate = () => {
  if (hydrated) return;
  hydrated = true;
  try {
    const stored = window.localStorage.getItem(storageKey);
    viewed = stored ? (JSON.parse(stored) as string[]) : [];
  } catch {
    viewed = [];
  }
  emit();
};

export function useRecentlyViewedStore() {
  useEffect(() => {
    const timer = window.setTimeout(hydrate, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const value = useSyncExternalStore(subscribe, () => viewed, () => emptyList);

  const addViewed = (id: string) => {
    viewed = [id, ...viewed.filter((item) => item !== id)].slice(0, 8);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(viewed));
    } catch {
      // ignore quota errors
    }
    emit();
  };

  const clearViewed = () => {
    viewed = [];
    try {
      window.localStorage.removeItem(storageKey);
    } catch {
      // ignore
    }
    emit();
  };

  return { recentlyViewed: value, addViewed, clearViewed };
}
