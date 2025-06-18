"use client";
import { useMask } from "@react-input/mask";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useIsMobile } from "../hooks/use-is-mobile";
import { Modal } from "../modal/modal";
import { Section } from "../section/section";

export const FormBlock = () => {
  const isMobile = useIsMobile();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const inputRef = useMask({
    mask: "+7 (___) ___-__-__",
    replacement: { _: /\d/ },
  });

  const handleButtonClick = async (e) => {
    e.preventDefault();
    if (phone.length !== 18) {
      setPhoneError(true);
      return;
    } else {
      setPhoneError(false);
    }
    try {
      const res = await fetch("/callback", {
        method: "POST",
        body: JSON.stringify({
          name,
          phone,
        }),
      });
      if (res.status === 200) setIsSuccess(true);
      else setIsError(true);
    } catch (e) {
      console.log(e);
      setIsError(true);
    }
  };

  return (
    <Section className="bg-bg md:py-[30px]" id="zapic">
      <div className=" py-[20px] md:py-[40px] px-[20px] xl:px-[60px] bg-white w-full rounded-[30px] flex flex-col md:flex-row-reverse gap-[50px]">
        <Image
          src="/assets/zapic.webp"
          alt="Фотография"
          width={574}
          height={548}
          className="xl:w-[574px] md:w-[329px] h-[251px] object-cover rounded-[30px] xl:h-[451px] md:h-[548px]"
          loading="lazy"
        />
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[10px]">
            <h2 className=" text-[20px] md:text-[22px] xl:text-[30px] font-bold leading-[140%] text-text-main">
              Запишитесь на бесплатную <br /> консультацию у стоматолога
            </h2>
            <span className="text-[14px] md:text-[20px] font-medium leading-[140%] text-text-main">
              Проверим зубы, составим план лечения {!isMobile && <br />} и
              сориентируем по полной стоимости - бесплатно
            </span>
          </div>

          <form
            className="flex flex-col gap-[20px] text-[16px]  leading-[140%] text-text-main"
            onSubmit={handleButtonClick}
          >
            <input
              type="text"
              className="px-[15px] py-[19px] rounded-[6px] bg-bg placeholder:text-gray-border"
              placeholder="Введите имя"
              onInput={(e) => setName(e.currentTarget.value)}
              required
            />
            <label htmlFor="tel">
              <input
                type="tel"
                id="tel"
                ref={inputRef}
                className="px-[15px] py-[19px] w-full rounded-[6px] bg-bg placeholder:text-gray-border"
                placeholder="+7 "
                onInput={(e) => setPhone(e.currentTarget.value)}
                required
              />
              {phoneError && (
                <div className="pl-5 pt-2 text-red-500">
                  Введите правильный номер
                </div>
              )}
            </label>

            <div className="flex flex-col gap-[15px] mt-[10px]">
              <div className="flex xl:flex-row flex-col gap-[10px] md:gap-[30px]">
                <button className="text-[16px] w-full cursor-pointer md:w-[317px] text-center font-medium text-white leading-[140%] transition-colors duration-200 bg-cl-main hover:bg-cl-main-hover py-[15px] px-[30px] rounded-full">
                  Записаться
                </button>
                <div className="flex flex-col gap-[2px]">
                  <span className="text-gray-border text-[14px] leading-[140%]">
                    Контактный телефон:
                  </span>
                  <a
                    href="tel:+79297770474"
                    className="text-text-main  text-[16px] leading-[140%] "
                  >
                    +7 (929) 777-04-74
                  </a>
                </div>
              </div>
              <span className="text-gray-border text-[12px] leading-[140%]">
                Нажимая кнопку “Записаться” я соглашаюсь с 
                <Link
                  href="/privacy"
                  className=" opacity-70 leading-[140%] text-blue-400 hover:opacity-100 transition-opacity duration-200"
                >
                  политикой обработки персональных данных
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
      {isSuccess ||
        (isError && (
          <Modal
            isOpen={isSuccess || isError}
            onClose={() => {
              setIsSuccess(false);
              setIsError(false);
            }}
          >
            <div className="px-[40px] py-[20px] xl:px-[100px] xl:py-[80px]">
              <p className="mb-[12px] text-text-main text-[20px] md:text-[30px] leading-[140%] font-medium md:font-bold text-center">
                {isSuccess && <>Заявка успешно отправлена!</>}
                {isError && <>Произошла ошибка</>}
              </p>
              <p className="mb-[40px] text-text-main text-[14px] md:text-[20px] leading-[140%] font-medium text-center">
                {isSuccess && <>Перезвоним вам в течении 30 минут</>}
                {isError && <>Попробуйте еще раз</>}
              </p>
              <button
                className="text-[16px] w-full  cursor-pointer text-center font-medium text-white leading-[140%] transition-colors duration-200 bg-cl-main hover:bg-cl-main-hover py-[15px] px-[30px] rounded-full"
                onClick={() => {
                  setIsSuccess(false);
                  setIsError(false);
                }}
              >
                Вернуться обратно
              </button>
            </div>
          </Modal>
        ))}
    </Section>
  );
};
