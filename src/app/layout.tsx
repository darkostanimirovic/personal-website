import type { Metadata, Viewport } from "next";
import SiteGate from "../components/SiteGate";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darko Stanimirović - Product Manager",
  description: "Official homepage of Darko Stanimirović - AI Product Manager",
};

export const viewport: Viewport = {
  width: 800,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteGate>{children}</SiteGate>
      </body>
    </html>
  );
}
