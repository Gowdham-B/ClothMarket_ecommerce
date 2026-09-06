"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDemoAuth } from "@/state/useDemoAuth";

const publicRoutes = new Set(["/login", "/register"]);

export function AppAccessGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, ready } = useDemoAuth();
  const isPublicRoute = publicRoutes.has(pathname);

  useEffect(() => {
    if (ready && !user && !isPublicRoute) router.replace("/login");
    if (ready && user && isPublicRoute) router.replace("/");
  }, [isPublicRoute, pathname, ready, router, user]);

  if (!ready || (!user && !isPublicRoute) || (user && isPublicRoute)) {
    return <main className="shell" style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}><p aria-live="polite">Preparing your ClothMarket experience…</p></main>;
  }
  return <>{children}</>;
}
