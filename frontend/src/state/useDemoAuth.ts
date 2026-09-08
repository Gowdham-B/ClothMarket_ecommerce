"use client";

import { useCallback, useEffect, useState } from "react";

export type DemoUser = { name: string; email: string };

const storageKey = "clothmarket-demo-user";
const defaultUser: DemoUser = {
  name: "gbrocks2005",
  email: "gbrocks2005@clothmarket.dev",
};

function readUser(): DemoUser | null {
  if (typeof window === "undefined") return defaultUser;
  try {
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      return JSON.parse(stored) as DemoUser;
    }
    // Set default demo user on first visit
    window.localStorage.setItem(storageKey, JSON.stringify(defaultUser));
    return defaultUser;
  } catch {
    return defaultUser;
  }
}

export function useDemoAuth() {
  const [user, setUser] = useState<DemoUser | null>(defaultUser);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setUser(readUser());
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const signIn = useCallback((nextUser: DemoUser) => {
    window.localStorage.setItem(storageKey, JSON.stringify(nextUser));
    setUser(nextUser);
  }, []);

  const signOut = useCallback(() => {
    window.localStorage.removeItem(storageKey);
    setUser(null);
  }, []);

  return { user, ready, signIn, signOut };
}
