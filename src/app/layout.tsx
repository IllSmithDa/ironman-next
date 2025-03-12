import type { Metadata } from "next";

import "@/app/globals.css"; // Import global styles

// ✅ Add metadata using Next.js built-in support
export const metadata: Metadata = {
  title: "IronCodeMan | Home",
  description: "Ironcodeman: A reference for Programmers. Select topic or language",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}