import classNames from "classnames";
import React, { useEffect, useState } from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    onClose();
  };

  useEffect(() => {
    setTimeout(() => setShowModal(true), 0);
  }, []);

  useEffect(() => {
    if (showModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [showModal]);

  return (
    <>
      <div
        className={classNames("fixed inset-0 z-50 overflow-y-auto transition-opacity duration-300 opacity-0", {
          "opacity-100": showModal,
        })}
        onClick={handleClose}
      >
        <div className="absolute inset-0 bg-gray-600 opacity-60"></div>
        <div className="flex min-h-full  items-center justify-center " onClick={(e) => e.stopPropagation()}>
          <div
            className="relative w-fit h-fit max-h-[calc(100vh-100px)] max-w-[calc(100vw-10vw)] overflow-auto rounded-[30px] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
