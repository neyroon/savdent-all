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
  keywords:
    "стоматология сафдент саратов,лечение зубов,стоматолог терапевт,болит зуб что делать,срочный стоматолог,детская стоматология,для беременных,для пенсионеров,отбеливание цена,круглосуточно,зубной камень чистка,ортодонт,терапевт,виниры,брекеты,отбеливание",
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
