import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Стоматология в Саратове без боли и ожиданий — лечим зубы за 1 день!",
  description:
    "Устраняем боль, восстанавливаем зубы и возвращаем уверенность в улыбке",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
