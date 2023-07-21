import { cn } from "@apee/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@apee/lib/fonts";

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
      <body
        className={cn("dark p-4 flex min-h-screen gap-x-4", inter.className)}
      >
        <nav className="invisible">
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

        <main className="bg-apee-darkGray rounded-3xl flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
