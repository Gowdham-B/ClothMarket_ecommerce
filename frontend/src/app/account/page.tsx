"use client";

import { useDemoAuth } from "@/state/useDemoAuth";
import styles from "../state-page.module.css";

export default function Account() {
  const { user, ready, signOut } = useDemoAuth();
  if (!ready) return <main className={`shell ${styles.page}`}><p>Loading your account…</p></main>;
  return <main className={`shell ${styles.page}`}><p className="eyebrow">ACCOUNT</p><h1 className={styles.title}>Your ClothMarket <em>account.</em></h1><div className={styles.empty}><h2>Welcome, {user?.name}.</h2><p>{user?.email}</p><p>Your local demo session is active. Saved products stay available in this browser while the secure API is being connected.</p><button className="button" onClick={signOut}>Sign out</button></div></main>;
}
