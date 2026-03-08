import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tayyaba & Jazib — We're Getting Married!",
  description: "Join us to celebrate the wedding of Tayyaba & Jazib. We can't wait to share this special day with you.",
  openGraph: {
    title: "Tayyaba & Jazib — Wedding Invitation",
    description: "You're invited to celebrate our love!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
