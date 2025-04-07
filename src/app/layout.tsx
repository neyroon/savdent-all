import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { YandexMetrika } from "@/components/metrika/metrika";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Стоматология в Саратове без боли и ожиданий — лечим зубы за 1 день!",
  description:
    "Устраняем боль, восстанавливаем зубы и возвращаем уверенность в улыбке",
  openGraph: {
    title:
      "Стоматология в Саратове без боли и ожиданий — лечим зубы за 1 день!",
    description:
      "Устраняем боль, восстанавливаем зубы и возвращаем уверенность в улыбке",
  },
  other: { "yandex-verification": "a4768154d76e35b7" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.variable} antialiased`}>
        <Suspense>
          <YandexMetrika />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
