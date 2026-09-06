"use client";
import { useCallback, useEffect, useState } from "react";
export type DemoUser = { name: string; email: string };
const storageKey = "clothmarket-demo-user";
function readUser(): DemoUser | null { if (typeof window === "undefined") return null; try { const stored = window.localStorage.getItem(storageKey); return stored ? JSON.parse(stored) as DemoUser : null; } catch { return null; } }
export function useDemoAuth() { const [user, setUser] = useState<DemoUser | null>(null); const [ready, setReady] = useState(false); useEffect(() => { const timer = window.setTimeout(() => { setUser(readUser()); setReady(true); }, 0); return () => window.clearTimeout(timer); }, []); const signIn = useCallback((nextUser: DemoUser) => { window.localStorage.setItem(storageKey, JSON.stringify(nextUser)); setUser(nextUser); }, []); const signOut = useCallback(() => { window.localStorage.removeItem(storageKey); setUser(null); }, []); return { user, ready, signIn, signOut }; }
