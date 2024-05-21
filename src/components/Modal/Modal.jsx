import React from "react";

import Carta from "../../assets/modal/carta.svg";
import Button from "../Button/Button";
import ModalImg from "../../assets/modal/modal.png";
import Enviar from "../../assets/modal/enviar.svg";

import "./global.css";

const Modal = ({ isOpen, closeModal }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative bg-white-100 p-8 lg:p-0 h-[307px] lg:h-[530px]">
            <div className="modal-content flex items-center flex-col lg:flex-row">
              <div className="image-content hidden lg:block">
                <img src={ModalImg} alt="Modal" />
              </div>
              <button
                className="close absolute top-0 right-0 p-2 text-gray-700 hover:text-gray-900"
                onClick={closeModal}
              >
                <span className="sr-only text-black z-10">FECHAR</span>
              </button>
              <div className="flex-col flex items-center lg:px-12">
                <img src={Carta} alt="Carta" />
                <h2 className="  mb-4 text-xs font-normal text-[#464B54] mt-3 text-center">
                  BEM VINDO À MAEZTRA
                </h2>
                <p className="text-xl text-center text-[#787D83] w-[258px] my- max-auto">
                  Receba em Primeira mão{" "}
                  <strong>desconto e ofertas exlcuivas</strong>
                </p>
                <div className="newsletter w-full mt-6">
                  <form
                    action="#"
                    method="post"
                    className="gap-5 flex flex-col lg:gap-0"
                  >
                    <input
                      className="lg:mb-6 pl-2 border-[1px] border-black rounded-md min-w-[200px] lg:min-w-96 py-2 "
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Digite seu e-mail"
                      required
                    />
                    <div className=" relative">
                      <img
                        src={Enviar}
                        alt="Enviar"
                        className="w-6 absolute right-0 left-0 top-0 bottom-0 m-auto mr-20px mr-[70px] lg:mr-[140px]"
                      />
                      <Button text={"Enviar"} className="py-3 w-full" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
