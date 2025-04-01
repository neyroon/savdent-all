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
};

const yandexScript = `<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(100720922, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/100720922" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->`;

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
