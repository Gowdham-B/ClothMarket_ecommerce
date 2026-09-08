"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDemoAuth } from "@/state/useDemoAuth";

const authOnlyRoutes = new Set(["/account"]);
const authRedirectRoutes = new Set(["/login", "/register"]);

export function AppAccessGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, ready } = useDemoAuth();

  const isAuthOnly = authOnlyRoutes.has(pathname);
  const isAuthRedirect = authRedirectRoutes.has(pathname);

  useEffect(() => {
    if (ready && !user && isAuthOnly) {
      router.replace("/login");
    }
    if (ready && user && isAuthRedirect) {
      router.replace("/");
    }
  }, [isAuthOnly, isAuthRedirect, ready, router, user]);

  if (ready && !user && isAuthOnly) {
    return (
      <main className="shell" style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
        <p aria-live="polite">Redirecting to sign in…</p>
      </main>
    );
  }

  return <>{children}</>;
}
