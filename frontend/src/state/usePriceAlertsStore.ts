"use client";

import { useEffect, useSyncExternalStore } from "react";

export type PriceAlert = {
  productId: string;
  targetPrice: number;
  createdAt: string;
};

const storageKey = "clothmarket-price-alerts";
const emptyAlerts: PriceAlert[] = [];
let alerts: PriceAlert[] = [];
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
    alerts = stored ? (JSON.parse(stored) as PriceAlert[]) : [];
  } catch {
    alerts = [];
  }
  emit();
};

export function usePriceAlertsStore() {
  useEffect(() => {
    const timer = window.setTimeout(hydrate, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const value = useSyncExternalStore(subscribe, () => alerts, () => emptyAlerts);

  const setAlert = (productId: string, targetPrice: number) => {
    const nextAlert: PriceAlert = {
      productId,
      targetPrice,
      createdAt: new Date().toISOString(),
    };
    alerts = [nextAlert, ...alerts.filter((a) => a.productId !== productId)];
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(alerts));
    } catch {
      // ignore
    }
    emit();
  };

  const removeAlert = (productId: string) => {
    alerts = alerts.filter((a) => a.productId !== productId);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(alerts));
    } catch {
      // ignore
    }
    emit();
  };

  const hasAlert = (productId: string) => {
    return value.some((a) => a.productId === productId);
  };

  return { alerts: value, setAlert, removeAlert, hasAlert };
}
