"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="page-shell" key={pathname}>
      {children}
    </main>
  );
}
