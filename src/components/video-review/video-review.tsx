"use client";
import React, { useRef, useState } from "react";
import { Section } from "../section/section";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Curve } from "../icons/curve";
import Image from "next/image";
import { Modal } from "../modal/modal";

export const VideoReview = ({ data }) => {
  console.log(data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const swiperRef = useRef<null | SwiperRef>(null);

  const handleButtonLeftClick = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleButtonRightClick = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handleModalOpen = (src: string) => {
    setCurrentVideo(src);
    setIsModalOpen(true);
  };

  return (
    <Section id="reviews">
      <h2 className="text-[20px] md:text-[26px] font-semibold leading-[140%] text-text-main mb-[50px]">
        Видео-отзывы
      </h2>
      <div className=" relative mr-[-20px] xl:mr-0">
        <button
          aria-label="Влево"
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
          slidesPerView={1.3}
          speed={700}
          breakpoints={{
            1280: { slidesPerView: 4 },
            768: { slidesPerView: 2.2 },
          }}
          ref={swiperRef}
        >
          {data?.videos?.video_item?.map((el, i) => (
            <SwiperSlide key={i}>
              <div
                className="rounded-[15px] h-[450px] relative flex justify-center items-center"
                onClick={() =>
                  handleModalOpen(`http://127.0.0.1:1337${el.video.url}`)
                }
              >
                <video
                  src={`http://127.0.0.1:1337${el.video.url}`}
                  className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover rounded-[15px]"
                />
                <Image
                  src="/assets/play.png"
                  alt="Воспроизвести"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] z-10"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <video
            src={currentVideo}
            preload="metadata"
            playsInline
            controls
            controlsList="nodownload"
            className="w-[80vw] h-[80vh] bg-text-main"
          ></video>
        </Modal>
      )}
    </Section>
  );
};
