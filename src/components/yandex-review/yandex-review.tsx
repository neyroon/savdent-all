"use client";
import React from "react";
import { Section } from "../section/section";
import { YandexIcon } from "../icons/yandex-icon";
import { MapIcon } from "../icons/map-icon";
import { StarsIcon } from "../icons/stars";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { StarsMiniIcon } from "../icons/stars-mini";
import { ADMIN_URL } from "../constants";

export const YandexReview = ({ data }) => {
  return (
    <Section>
      <div className="flex flex-col gap-[50px]">
        <div className="bg-bg px-[20px] md:py-[40px] py-[20px] border-gray-line border-[1px] rounded-[15px] flex md:flex-row flex-col justify-between gap-[20px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[15px]">
              <span className="text-[26px] text-text-main font-semibold leading-[140%]">
                Отзывы
              </span>
              <div className="px-[20px] py-[5px] flex gap-[5px] bg-white rounded-[20px]">
                <YandexIcon />
                <MapIcon />
                <span className="text-gray-border text-[14px] leading-[140%]">
                  Карты
                </span>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:items-center gap-[15px]">
              <div className="flex flex-row gap-[10px] mr-[15px]">
                <StarsIcon />
                <span className=" text-cl-main text-[16px] leading-[140%]">
                  5 из 5
                </span>
              </div>
              <span className="text-text-main text-[14px] leading-[140%]">
                На основе 683 оценок
              </span>
            </div>
          </div>
          <Link
            href="https://yandex.ru/maps/-/CHRO44Ic"
            className="px-[20px] py-[8px] font-medium text-cl-main text-[16px] leading-[140%] md:self-end bg-white rounded-[30px] text-center"
          >
            Оставить отзыв
          </Link>
        </div>
        <div>
          <Swiper
            spaceBetween={20}
            slidesPerView={1.1}
            speed={700}
            breakpoints={{
              1280: { slidesPerView: 4 },
              768: { slidesPerView: 2.2 },
            }}
          >
            {data?.reviews?.review_item?.map((el, i) => (
              <SwiperSlide key={i} style={{ height: "auto" }}>
                <div className="rounded-[15px] py-[30px] px-[20px] bg-bg flex flex-col gap-[30px] h-full">
                  <div className="flex justify-between">
                    <div className="flex gap-[10px] w-full">
                      {el?.image?.url && (
                        <Image
                          src={`${ADMIN_URL}${el?.image?.url}`}
                          alt="Фото с отзыва"
                          width={43}
                          height={43}
                          className="rounded-full shrink-0"
                        />
                      )}
                      <div className="flex flex-col w-full">
                        <div className="flex justify-between">
                          <p className="text-gray-border text-[12px] leading-[20.8px]">
                            {el?.date}
                          </p>
                          <StarsMiniIcon />
                        </div>
                        <p className="text-text-main text-[16px] leading-[140%] font-medium">
                          {el?.fullname}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-[15px] bg-white text-text-main flex flex-col gap-[10px] rounded-[15px] mt-auto">
                    <p className="text-[16px] leading-[140%] text-text-main overflow-hidden text-ellipsis line-clamp-4">
                      {el?.review_text}
                    </p>
                    <Link
                      href={el?.link}
                      className="text-[12px] leading-[20.8px] text-gray-border  "
                    >
                      Читать подробнее
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};
