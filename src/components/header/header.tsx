"use client";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { TgIcon } from "@/components/icons/tg-icon";
import { VkIcon } from "@/components/icons/vk-icon";
import { FormPopup } from "../form-popup/form-popup";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const navigationItems = [
    { text: "Главная", link: "#main" },
    { text: "Услуги и цены", link: "#price" },
    { text: "Врачи", link: "#doctors" },
    { text: "Отзывы", link: "#reviews" },
    { text: "Контакты", link: "#contacts" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <>
      <header className="bg-white fixed w-[100%] flex justify-center border-b-[1px] z-20 border-gray-line">
        <div className="px-[20px] w-full xl:px-0 xl:w-[1260px] l:w-[1372px]">
          <div className="flex justify-between items-center  py-[10px] ">
            <Link href="/" className="cursor-pointer">
              <Image
                width={153}
                height={35}
                src="/assets/logo.png"
                alt="Логотип"
                className="w-[153px] h-[35px]"
              />
            </Link>
            <nav className="hidden xl:block font-medium text-[14px]/[20px] ">
              <ul className="flex gap-[32px]  ">
                {navigationItems.map(({ text, link }) => (
                  <li
                    key={text}
                    className="cursor-pointer text-text-main transition-opacity duration-200  opacity-70 hover:opacity-100"
                  >
                    <a href={link}>{text}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-[30px]">
              <a
                href="tel:+79297770474"
                className="hidden md:block text-text-main text-[16px] leading-[140%] font-medium transition-opacity duration-200 opacity-70 hover:opacity-100"
              >
                +7 (929) 777-04-74
              </a>
              <div className="hidden xl:flex  gap-[10px]">
                <Link
                  href="/tg"
                  className=" flex items-center gap-[8px] transition-colors duration-200 text-tg hover:bg-tg hover:text-white bg-icon-bg rounded-full py-[8px] px-[10px]"
                >
                  <TgIcon />
                  <span className=" text-[14px] leading-[140%]  font-normal">
                    Телеграм канал
                  </span>
                </Link>
                <Link
                  href="/vk"
                  className="bg-icon-bg py-[8px] px-[10px] transition-colors duration-200 rounded-full text-vk hover:bg-vk hover:text-white flex items-center"
                >
                  <VkIcon />
                </Link>
              </div>
            </div>
            <button
              className=" md:block cursor-pointer hidden text-[16px] font-medium text-white leading-[140%] transition-colors duration-200 bg-cl-main hover:bg-cl-main-hover py-[15px] px-[30px] rounded-full"
              onClick={() => setIsModalOpen(true)}
            >
              Записаться на прием
            </button>
            <button
              className="md:hidden block cursor-pointer  text-[14px] font-medium text-white leading-[140%] transition-colors duration-200 bg-cl-main hover:bg-cl-main-hover py-[11px] px-[10px] rounded-full"
              onClick={() => setIsModalOpen(true)}
            >
              Записаться
            </button>
            <div
              onClick={handleMenuButtonClick}
              className="grid xl:hidden z-50 place-content-center w-[35px] h-[26px]"
            >
              <div className="w-[35px] h-[2px] bg-[#B89C4C] rounded-full transition-all duration-300 before:content-[''] before:absolute before:w-[35px] before:h-[2px] before:bg-[#B89C4C] before:rounded-full before:-translate-y-[10px] before:transition-all before:duration-300 after:content-[''] after:absolute after:w-[35px] after:h-[2px] after:bg-[#B89C4C] after:rounded-full after:translate-y-[10px] after:transition-all after:duration-300"></div>
            </div>
          </div>
        </div>
      </header>
      <aside
        className={classNames(
          {
            "translate-x-[0]": isOpen,
            "translate-x-[-100%]": !isOpen,
          },
          " bg-white fixed top-0 left-0 bottom-0 right-0 w-[100%]  z-20  transition-transform duration-300 supports-[-webkit-touch-callout: none]:h-[webkit-fill-available]"
        )}
      >
        <div
          onClick={handleMenuButtonClick}
          className={classNames(
            "grid xl:hidden z-50 place-content-center w-[35px] h-[26px] absolute top-[20px] right-[20px]",
            {
              "hamburger-toggle": isOpen,
            }
          )}
        >
          <div className="w-[35px] h-[2px] bg-[#B89C4C] rounded-full transition-all duration-300 before:content-[''] before:absolute before:w-[35px] before:h-[2px] before:bg-[#B89C4C] before:rounded-full before:-translate-y-[10px] before:transition-all before:duration-300 after:content-[''] after:absolute after:w-[35px] after:h-[2px] after:bg-[#B89C4C] after:rounded-full after:translate-y-[10px] after:transition-all after:duration-300"></div>
        </div>
        <div className="mt-[66px] px-[20px]  h-[calc(100%-66px)] flex flex-col gap-[40px] overflow-y-scroll ">
          <nav className="">
            <ul className=" flex flex-col gap-[25px]">
              {navigationItems.map(({ text, link }) => (
                <li key={text} className="" onClick={handleNavLinkClick}>
                  <a
                    href={link}
                    className=" text-text-main font-medium text-[16px]/[140%] opacity-70"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-[30px]">
            <a
              href="tel:+79297770474"
              className="text-text-main text-[16px] leading-[140%] font-medium transition-opacity duration-200 opacity-70 hover:opacity-100"
            >
              +7 (929) 777-04-74
            </a>
            <div className="flex  gap-[20px]">
              <a
                href="tg"
                className=" flex items-center gap-[8px] transition-colors duration-200 text-tg hover:bg-tg hover:text-white bg-icon-bg rounded-full py-[8px] px-[10px]"
              >
                <TgIcon />
                <span className=" text-[14px] leading-[140%]  font-normal">
                  Телеграм канал
                </span>
              </a>
              <a
                href="vk"
                className="bg-icon-bg py-[8px] px-[10px] transition-colors duration-200 rounded-full text-vk hover:bg-vk hover:text-white flex items-center"
              >
                <VkIcon />
              </a>
            </div>
            <button
              className="text-[16px] cursor-pointer w-[222px] font-medium text-white leading-[140%] transition-colors duration-200 bg-cl-main hover:bg-cl-main-hover py-[15px] px-[30px] rounded-full"
              onClick={() => setIsModalOpen(true)}
            >
              Записаться на прием
            </button>
          </div>
        </div>
      </aside>
      {isModalOpen && (
        <FormPopup
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};
