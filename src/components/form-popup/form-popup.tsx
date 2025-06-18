"use client";
import { useMask } from "@react-input/mask";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useIsMobile } from "../hooks/use-is-mobile";
import { Loader } from "../icons/loader";
import { Modal } from "../modal/modal";

export const FormPopup = ({
  isModalOpen,
  dentistName,
  serviceName,
  onClose,
}: {
  isModalOpen: boolean;
  dentistName?: string;
  serviceName?: string;
  onClose: () => void;
}) => {
  const isMobile = useIsMobile();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      const res = await fetch("/callback", {
        method: "POST",
        body: JSON.stringify({
          name,
          phone,
          ...(dentistName ? { dentistName } : {}),
          ...(serviceName ? { serviceName } : {}),
        }),
      });
      if (res.status === 200) setIsSuccess(true);
      else setIsError(true);
    } catch (e) {
      console.log(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => (
    <>
      {!isSuccess ? (
        <div className=" py-[40px] px-[20px] xl:px-[40px] bg-white w-full rounded-[30px] flex flex-col md:flex-row-reverse gap-[20px]">
          <div className="relative xl:w-[574px] md:w-[329px] h-[251px] xl:h-[451px] md:h-[548px] shrink-0">
            <div
              className="p-[5px] flex justify-center items-center bg-gray-border rounded-full absolute top-0 right-0  cursor-pointer text-text-main hover:text-white z-1"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M12.7935 0.735382L0.735267 12.7935C0.32919 13.1996 0.329188 13.858 0.735264 14.2641C1.14134 14.6701 1.79972 14.6701 2.20579 14.2641L14.264 2.20591C14.6701 1.79983 14.6701 1.14145 14.264 0.735379C13.8579 0.329304 13.1995 0.329306 12.7935 0.735382Z"
                  fill="currentColor"
                />
                <path
                  d="M14.2646 12.7944L2.20646 0.736242C1.80038 0.330166 1.142 0.330165 0.735927 0.736239C0.329852 1.14231 0.329853 1.80069 0.73593 2.20677L12.7941 14.2649C13.2002 14.671 13.8586 14.671 14.2647 14.2649C14.6707 13.8589 14.6707 13.2005 14.2646 12.7944Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <Image
              src="/assets/zapic.webp"
              alt="Фотография"
              fill
              className=" object-cover rounded-[30px] w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-[30px] max-w-[530px]">
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
                onInput={(e) => {
                  setName(e.currentTarget.value);
                }}
                required
              />
              <label htmlFor="tel">
                <input
                  id="tel"
                  type="tel"
                  ref={inputRef}
                  className="p-[15px] w-full py-[19px] rounded-[6px] bg-bg placeholder:text-gray-border"
                  placeholder="+7 "
                  onInput={(e) => {
                    setPhone(e.currentTarget.value);
                  }}
                  required
                />
                {phoneError && (
                  <div className="pl-5 pt-2 text-red-500">
                    Введите правильный номер
                  </div>
                )}
              </label>

              <div className="flex flex-col gap-[15px]">
                <div className="flex xl:flex-row flex-col gap-[10px] md:gap-[30px]">
                  <button
                    className="text-[16px] w-full cursor-pointer md:w-[317px] text-center font-medium text-white leading-[140%] transition-colors duration-200 bg-cl-main hover:bg-cl-main-hover py-[15px] px-[30px] rounded-full flex justify-center"
                    type="submit"
                  >
                    {isLoading ? <Loader /> : <>Записаться</>}
                  </button>
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-gray-border text-[14px] leading-[140%]">
                      Контактный телефон:
                    </span>
                    <Link
                      href="tel:+79297770474"
                      className="text-text-main  text-[16px] leading-[140%] "
                    >
                      +7 (929) 777-04-74
                    </Link>
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
      ) : (
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
            onClick={() => onClose()}
          >
            Вернуться обратно
          </button>
        </div>
      )}
    </>
  );

  return (
    <Modal isOpen={isModalOpen} onClose={onClose}>
      {renderContent()}
    </Modal>
  );
};
