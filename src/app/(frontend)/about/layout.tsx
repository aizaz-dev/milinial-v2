import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className={inter.className}>{children}</div>;
}
