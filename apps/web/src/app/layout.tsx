import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas IA",
  description: "Atlas IA por Krypstar Labs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
