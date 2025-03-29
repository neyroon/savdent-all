"use client";
import React, { useEffect, useState } from "react";
import { Tab } from "./tab";
import { TabContent } from "./tab-content";
import { Swiper, SwiperSlide } from "swiper/react";
import { FormPopup } from "../form-popup/form-popup";

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Популярные");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [serviceName, setServiceName] = useState("");

  useEffect(() => {
    setIsMobile(window.innerWidth < 1280);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContentMobile = (el) => {
    return (
      <Swiper
        spaceBetween={20}
        slidesPerView={1.3}
        speed={700}
        breakpoints={{ 768: { slidesPerView: 2.2 } }}
      >
        {el.service.map((cEl) => (
          <SwiperSlide key={cEl.name} style={{ height: "auto" }}>
            <div className="px-[20px] py-[25px] h-full group flex flex-col gap-[25px] rounded-[15px] transition-colors duration-200 bg-white border-1 border-transparent hover:border-[rgba(184,156,76,0.40)]">
              <div className="flex flex-col gap-[5px]">
                <span className="text-[16px] leading-[140%] text-gray-border ">
                  Название услуги
                </span>
                <span className="text-[16px] leading-[140%] text-text-main ">
                  {cEl.name}
                </span>
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="text-[16px] leading-[140%] text-gray-border ">
                  Ценность
                </span>
                <span className="text-[16px] leading-[140%] text-text-main ">
                  {cEl.value}
                </span>
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="text-[16px] leading-[140%] text-gray-border ">
                  Что входит
                </span>
                <span className="text-[16px] leading-[140%] text-text-main ">
                  {cEl.contain}
                </span>
              </div>
              <div className="flex justify-between mt-auto">
                <span className="text-[16px] leading-[140%] text-cl-main bg-bg border-1 border-gray-line w-[109px] flex justify-center py-[8px] rounded-[20px] transition-colors duration-200 group-hover:text-green-main">
                  {cEl.price}
                </span>
                <button
                  className="text-[16px] font-medium text-white leading-[140%] transition-colors duration-200 bg-[#7FCE41B2] group-hover:bg-green-main py-[8px] px-[14px] rounded-full"
                  onClick={() => {
                    setIsModalOpen(true);
                    setServiceName(cEl.name);
                  }}
                >
                  Записаться
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  const renderTabContentDes = (el) => (
    <>
      {el.service.map((cEl) => (
        <div
          key={cEl.name}
          className="px-[30px] py-[25px] group flex gap-[10px] min-h-[119px] justify-between items-start rounded-[15px] transition-colors duration-200 bg-white border-1 border-transparent hover:border-[rgba(184,156,76,0.40)]"
        >
          <span className="text-[16px] leading-[140%] text-text-main w-[271px]">
            {cEl.name}
          </span>
          <span className="text-[16px] leading-[140%] text-text-main w-[350px]">
            {cEl.value}
          </span>
          <span className="text-[16px] leading-[140%] text-gray-border w-[310px]">
            {cEl.contain}
          </span>
          <span className="text-[16px] leading-[140%] text-cl-main bg-bg border-1 border-gray-line w-[109px] flex justify-center py-[8px] rounded-[20px] transition-colors duration-200 group-hover:text-green-main">
            {cEl.price}
          </span>
          <button
            className="text-[16px] cursor-pointer font-medium text-white leading-[140%] transition-colors duration-200 bg-[#7FCE41B2] group-hover:bg-green-main py-[8px] px-[14px] rounded-full"
            onClick={() => {
              setIsModalOpen(true);
              setServiceName(cEl.name);
            }}
          >
            Записаться
          </button>
        </div>
      ))}
    </>
  );

  return (
    <>
      <div className="flex md:flex-row flex-col gap-[20px] md:gap-[50px]">
        <h2 className="text-[20px] md:text-[26px] font-semibold leading-[140%] shrink-0">
          Предоставляем услуги
        </h2>
        <div className="w-full md:w-[calc(100%-332px)] tabs">
          <Swiper
            spaceBetween={10}
            slidesPerView={2.6}
            speed={700}
            breakpoints={{
              1280: { slidesPerView: 5, spaceBetween: 20 },
              768: { slidesPerView: 3 },
            }}
            className="mr-[-20px]! :md:mr-[-15px]! xl:mr-0!"
          >
            <div className="flex gap-[10px]">
              {data.tabs.tab.map((tab) => (
                <SwiperSlide key={tab.title} style={{ height: "auto" }}>
                  <Tab
                    label={tab.title}
                    active={activeTab === tab.title}
                    onClick={() => handleTabClick(tab.title)}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
      <div className="relative mt-[50px] md:mt-[70px]">
        <div className="xl:flex hidden justify-between px-[30px] mb-[20px]">
          <span className="text-[16px] leading-[140%] font-medium text-text-main w-[271px]">
            Название услуги
          </span>
          <span className="text-[16px] leading-[140%] font-medium text-text-main w-[350px]">
            Ценность
          </span>
          <span className="text-[16px] leading-[140%] font-medium text-text-main w-[310px]">
            Что входит
          </span>
          <span className="text-[16px] leading-[140%] font-medium text-text-main w-[103px]">
            Стоимость
          </span>
          <span className="text-[16px] leading-[140%] font-medium text-text-main w-[100px]"></span>
        </div>
        {data.tabs.tab.map((el) => (
          <TabContent key={el.title} active={activeTab === el.title}>
            <div className="xl:flex flex-col gap-[10px] mr-[-20px] md:mr-0">
              {isMobile ? renderTabContentMobile(el) : renderTabContentDes(el)}
            </div>
          </TabContent>
        ))}
      </div>
      {isModalOpen && (
        <FormPopup
          serviceName={serviceName}
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Tabs;
