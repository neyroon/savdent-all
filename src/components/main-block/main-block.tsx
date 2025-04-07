"use client";
import React, { Fragment, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Section } from "../section/section";
import { FormPopup } from "../form-popup/form-popup";
import Image from "next/image";
import { ADMIN_URL } from "../constants";
import { useIsMobile } from "../hooks/use-is-mobile";

export const MainBlock = ({ data }) => {
  const content = [
    {
      title: "Без боли",
      text: (
        <>
          лечим абсолютно <br />
          безболезненно
        </>
      ),
    },
    {
      title: "Нет переплат",
      text: (
        <>
          прозрачные цены,
          <br />
          рассчитаем заранее
        </>
      ),
    },
    {
      title: "Нет времени",
      text: (
        <>
          решим проблему
          <br />
          за 1 визит
        </>
      ),
    },
    { title: "Стыдитесь улыбки", text: "восстановим за 1 день" },
    { title: "Безопасно", text: "гарантируем 1 год" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const isMobile = useIsMobile();

  return (
    <Section id="main" className="scroll-mt-[73px]">
      <div className="flex md:flex-row flex-col gap-[30px] md:gap-[20px] ">
        <div className="md:bg-bg md:p-[30px] rounded-[30px] md:h-[562px] flex items-center md:w-[calc(50%-10px)]">
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-[22px] xl:text-[30px] text-text-main font-bold leading-[140%]">
              {isMobile ? (
                <>
                  Стоматология в Саратове <br /> без боли и ожиданий <br /> —
                  лечим зубы за 1 день
                </>
              ) : (
                <>
                  Стоматология в Саратове без боли и ожиданий — лечим зубы за 1
                  день
                </>
              )}
            </h1>
            <span className="md:text-[20px] text-[16px]  text-text-main font-medium leading-[140%]">
              Устраняем боль, восстанавливаем зубы и возвращаем уверенность в
              улыбке
            </span>
            <div className="flex flex-col xl:flex-row gap-[15px]">
              <button
                className="text-[16px] cursor-pointer font-medium text-white leading-[140%] transition-colors duration-200 bg-cl-main hover:bg-cl-main-hover py-[15px] xl:px-[30px] text-center rounded-full"
                onClick={() => {
                  setIsModalOpen(true);
                  ym(100720922, "reachGoal", "popup_default");
                }}
              >
                Записаться на бесплатный прием
              </button>
              <a
                href="#price"
                className="text-[16px] text-center border-gray-border border-1  font-medium text-text-main leading-[140%] transition-colors duration-200 bg-bg hover:bg-cl-main hover:text-white py-[15px] px-[25px] rounded-full"
              >
                Цены и услуги
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-[30px] h-[460px] md:h-[562px]  md:w-[calc(50%-10px)]">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ type: "bullets", clickable: true }}
            speed={700}
            loop
            modules={[Pagination]}
          >
            {data?.slide?.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className=" rounded-[30px] h-[460px] md:h-[562px]   relative">
                  {slide?.image?.url && (
                    <Image
                      src={`${ADMIN_URL}${slide?.image?.url}`}
                      fill
                      alt="Изображение в слайдере"
                      priority={i === 0}
                      className="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-[30px] object-cover"
                    />
                  )}
                  <div className="absolute right-[10px] md:right-[30px] bottom-[63px] w-[157px] md:w-[182px] md:bottom-auto md:top-[30px] p-[20px] flex flex-col gap-[10px] bg-white rounded-[16px]">
                    <span className="text-[16px] text-text-main leading-[140%]">
                      {slide?.title}
                    </span>
                    <span className="text-[14px] text-gray-border leading-[140%]">
                      {slide?.description}
                    </span>
                  </div>
                  {!slide?.removeButton && (
                    <button
                      className="absolute cursor-pointer right-[10px] md:right-[30px] bottom-[10px] md:bottom-[17px]  text-[16px] font-medium text-cl-main leading-[140%] transition-colors duration-200 z-50 bg-white hover:text-text-main py-[8px] px-[20px] rounded-full"
                      onClick={() => {
                        setIsModalOpen(true);
                        setName(slide?.description);
                        ym(100720922, "reachGoal", "popup_dentist");
                      }}
                    >
                      Записаться
                    </button>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="mt-[40px]  mr-[-20px] xl:mr-0">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.3}
          speed={700}
          breakpoints={{
            1280: { slidesPerView: 5 },
            768: { slidesPerView: 2.7 },
          }}
        >
          {content.map((el, i) => (
            <SwiperSlide key={el?.title} style={{ height: "auto" }}>
              <div className="w-full h-full py-[30px] px-[15px] rounded-[15px] border-bg border-1 transition-colors duration-200 hover:bg-bg flex gap-[18px]">
                <span className=" text-[16px] text-cl-main leading-[140%] w-[25px] h-[25px] flex items-center justify-center bg-white rounded-[6px] shrink-0 ">
                  {i + 1}
                </span>
                <div className="flex flex-col flex-auto gap-[10px]">
                  <span className="text-[18px] text-text-main font-medium leading-[140%]">
                    {el?.title}
                  </span>
                  <span className="text-[16px] text-text-main  leading-[140%]">
                    {el?.text}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {isModalOpen && (
        <FormPopup
          isModalOpen={isModalOpen}
          dentistName={name}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </Section>
  );
};
