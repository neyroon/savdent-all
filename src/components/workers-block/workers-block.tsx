"use client";
import React, { useEffect, useRef, useState } from "react";
import { Section } from "../section/section";
import { Swiper, SwiperRef } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Curve } from "../icons/curve";
import { FormPopup } from "../form-popup/form-popup";
import Image from "next/image";
import Link from "next/link";
import { ADMIN_URL } from "../constants";

export const WorkersBlock = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");

  const swiperRef = useRef<null | SwiperRef>(null);

  const handleButtonLeftClick = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleButtonRightClick = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const [marginRight, setMarginRight] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 1408)
      setMarginRight(-((window.innerWidth - 1372) / 2));
    else if (window.innerWidth >= 1280)
      setMarginRight(-((window.innerWidth - 1280) / 2));
  }, []);

  return (
    <Section className="bg-bg" id="doctors">
      <h2 className="text-[20px] md:text-[26px] font-semibold leading-[140%] text-text-main mb-[50px]">
        Ваши зубы в надежных руках профессионалов
      </h2>
      <div
        className=" relative mr-[-20px] xl:mr-0"
        style={marginRight ? { marginRight } : {}}
      >
        <button
          className="hidden xl:flex absolute top-[50%] left-0 w-[50px] h-[50px] justify-center items-center translate-y-[-50%] z-10 rounded-full bg-text-main opacity-30 cursor-pointer backdrop-blur-[4px] hover:opacity-100 transition-opacity duration-200"
          onClick={handleButtonLeftClick}
        >
          <Curve />
        </button>
        <button
          className="hidden xl:flex absolute top-[50%] right-0 w-[50px] h-[50px]  justify-center items-center translate-y-[-50%] z-10 rounded-full bg-text-main opacity-30 cursor-pointer backdrop-blur-[4px] hover:opacity-100 transition-opacity duration-200 scale-[-1]"
          onClick={handleButtonRightClick}
        >
          <Curve />
        </button>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          speed={700}
          breakpoints={{
            1280: { slidesPerView: 4.7 },
            768: { slidesPerView: 2.2 },
          }}
          ref={swiperRef}
        >
          {data?.workers_slider?.workers_slide?.map((el, i) => {
            return (
              <SwiperSlide key={i} style={{ height: "auto" }}>
                <div className="rounded-[15px] bg-white border-1 border-gray-line flex flex-col gap-[20px] p-[20px] h-full">
                  <div className="relative">
                    {el.image?.url && (
                      <Image
                        src={`${ADMIN_URL}${el.image?.url}`}
                        alt="Фотография сотрудника"
                        height={330}
                        width={255}
                        className="w-full h-[330px] object-cover rounded-[15px]"
                        loading="lazy"
                      />
                    )}
                    {!el.removeButton && (
                      <button
                        className="absolute cursor-pointer right-[20px] top-[20px] text-[16px] font-medium text-cl-main leading-[140%] transition-colors duration-200 bg-white hover:text-text-main py-[8px] px-[20px] rounded-full"
                        onClick={() => {
                          setIsModalOpen(true);
                          setName(el?.title);
                          ym(100720922, "reachGoal", "popup_dentist");
                        }}
                      >
                        Записаться
                      </button>
                    )}
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <span className="text-[16px] text-[#100F10] leading-[140%] text-center h-[45px]">
                      {el?.title}
                    </span>
                    <span className="text-[16px] text-[#100F10] leading-[140%] text-center">
                      {el?.description}
                    </span>
                    <span className="text-[16px] text-[#969FA8] leading-[140%] text-center">
                      Образование и практика:
                    </span>
                  </div>
                  <div className="flex gap-[10px]">
                    {el.certificates?.certificate_item.map((item, i) => (
                      <React.Fragment key={i}>
                        {item?.cert?.url && (
                          <Link
                            href={`${ADMIN_URL}${item?.cert?.url}`}
                            target="_blank"
                            rel="noreferrer"
                            key={i}
                            className="w-[calc(25%-5px)] h-[94px] rounded-[5px] block"
                          >
                            {item?.image?.url && (
                              <Image
                                src={`${ADMIN_URL}${item?.image?.url}`}
                                alt="Сертификат"
                                width={55}
                                height={94}
                                className="w-full h-full object-cover contrast-[0.8] hover:contrast-[0.7] rounded-[5px]"
                                loading="lazy"
                              />
                            )}
                          </Link>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
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
