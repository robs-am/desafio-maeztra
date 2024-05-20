import React from 'react';

import Carta from '../../assets/modal/carta.svg';
import Button from '../Button/Button';

const Modal = ({ isOpen, closeModal }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative bg-white-100 p-8 h-[307px]">
            <div className="modal-content flex items-center flex-col">
              <button
                className="absolute top-0 right-0 p-2 text-gray-700 hover:text-gray-900"
                onClick={closeModal}
              >
                <span className="sr-only text-black z-10">FECHAR</span>
              </button>
              <img src={Carta} alt="Carta" />
              <h2 className="  mb-4 text-xs font-normal text-[#464B54] mt-3">
                BEM VINDO À MAEZTRA
              </h2>
              <p className="text-base text-center text-[#787D83] w-[258px]">
                Receba em Primeira mão{' '}
                <strong>desconto e ofertas exlcuivas</strong>
              </p>
              <div className="newsletter w-full mt-6">
                <form
                  action="#"
                  method="post"
                  className="gap-5 flex flex-col lg:gap-0"
                >
                  <input
                    className="pl-2 border-[1px] border-black rounded-md min-w-[200px] lg:min-w-96 py-2 "
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    required
                  />
                  <Button text={'Enviar'} className="py-3" />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
