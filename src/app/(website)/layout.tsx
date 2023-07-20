import { cn } from "@apee/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antoine Plu",
  description: "Senior designer passionate about sports and gaming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("dark p-4", inter.className)}>
        <nav>
          <form>
            <input type="search" placeholder="Search" name="search" />
          </form>

          <section>
            <h2>Collections</h2>
            <ul></ul>
          </section>

          <section>
            <h2>Projects</h2>
            <ul></ul>
          </section>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
