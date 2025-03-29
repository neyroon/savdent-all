import React from "react";
import { TgIcon } from "../icons/tg-icon";
import { VkIcon } from "../icons/vk-icon";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const navigationItems = [
    { text: "Главная", link: "#main" },
    { text: "Услуги и цены", link: "#price" },
    { text: "Врачи", link: "#doctors" },
    { text: "Отзывы", link: "#reviews" },
    { text: "Контакты", link: "#contacts" },
  ];
  return (
    <footer
      className="bg-text-main  w-[100%]  flex justify-center "
      id="contacts"
    >
      <div className="px-[20px] w-full xl:px-0 xl:w-[1260px] l:w-[1372px] flex flex-col md:flex-col-reverse gap-[30px] md:gap-[50px] xl:gap-0 xl:flex-row justify-between py-[50px]">
        <div className="flex flex-col gap-[30px] md:gap-[25px]">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/assets/logo.png"
              alt="Логотип"
              width={153}
              height={35}
              className="w-[153px] h-[35px]"
              loading="lazy"
            />
          </Link>
          <div className="flex gap-[10px]">
            <Link
              href="tg"
              className=" flex items-center gap-[8px] transition-colors duration-200 text-tg hover:bg-tg hover:text-white bg-icon-bg rounded-full py-[8px] px-[10px]"
            >
              <TgIcon />
              <span className=" text-[14px] leading-[140%]  font-normal">
                Телеграм канал
              </span>
            </Link>
            <Link
              href="vk"
              className="bg-icon-bg py-[8px] px-[10px] transition-colors duration-200 rounded-full text-vk hover:bg-vk hover:text-white flex items-center"
            >
              <VkIcon />
            </Link>
          </div>
          <Link
            href="/"
            className="hidden md:block text-white opacity-70 text-[14px] leading-[140%] hover:opacity-100 transition-opacity duration-200"
          >
            Политика <br /> конфиденциальности
          </Link>
          <Link
            href="/"
            className="hidden md:block text-white opacity-70 text-[14px] leading-[140%] hover:opacity-100 transition-opacity duration-200"
          >
            Политика обработки <br /> персональных данных
          </Link>
        </div>

        <nav className="">
          <ul className="flex flex-col gap-[25px]  ">
            {navigationItems.map(({ text, link }) => (
              <li
                key={text}
                className=" font-medium text-[16px] leading-[140%] text-white transition-opacity duration-200  opacity-70 hover:opacity-100"
              >
                <a href={link}>{text}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="h-[179px]">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9d259d558dc63d4fb0df5cdff84277e56e69f4c0d3d63d62f8589ab49f4b472d&amp;source=constructor"
            width="auto"
            height="179"
            frameBorder="0"
            loading="lazy"
            title="Карта"
            className="rounded-[24px] block md:hidden w-full"
          ></iframe>
        </div>

        <div className="flex gap-[20px] justify-between xl:justify-start">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[2px]">
              <span className="text-gray-border  text-[14px] leading-[140%] ">
                Адрес стоматологии
              </span>
              <span className="text-white  text-[16px] leading-[140%] ">
                г. Саратов, ул. Бардина, 10
              </span>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-gray-border  text-[14px] leading-[140%]">
                Контактный телефон:
              </span>
              <Link
                href="tel:+79297770474"
                className="text-white  text-[16px] leading-[140%] "
              >
                +7 (929) 777-04-74
              </Link>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-gray-border  text-[14px] leading-[140%]">
                Режим работы
              </span>
              <span className="text-white  text-[16px] leading-[140%] ">
                ПН-ПТ 09:00 - 18:00
              </span>
            </div>
            <Link
              href="#zapic"
              className="text-[16px] w-[222px] font-medium text-white leading-[140%] transition-colors duration-200 bg-cl-main hover:bg-cl-main-hover py-[15px] px-[30px] rounded-full"
            >
              Записаться на прием
            </Link>
            <Link
              href="/"
              className="block md:hidden text-white opacity-70 text-[14px] leading-[140%] hover:opacity-100 transition-opacity duration-200"
            >
              Политика <br /> конфиденциальности
            </Link>
            <Link
              href="/"
              className="block md:hidden text-white opacity-70 text-[14px] leading-[140%] hover:opacity-100 transition-opacity duration-200"
            >
              Политика обработки <br /> персональных данных
            </Link>
          </div>
          <div className="w-[328px] h-[244px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A9d259d558dc63d4fb0df5cdff84277e56e69f4c0d3d63d62f8589ab49f4b472d&amp;source=constructor"
              width="328"
              height="244"
              loading="lazy"
              title="Карта"
              frameBorder="0"
              className="rounded-[24px] hidden md:block"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};
