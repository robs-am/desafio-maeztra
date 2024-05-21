// @ts-nocheck
import React from 'react';
import Button from '../Button/Button';

const Newsletter = () => {
  return (
    <section className="newsletter bg-white-200 flex  justify-center">
      <div className="container py-6 px-8 border-t-2 border-[#EFEFEF] border-b-2">
        <div className="newsletter-content flex flex-col justify-center items-center gap-2 lg:flex lg:flex-row lg:gap-12 lg:py-5">
          <h2 className="news-title text-2xl font-bold text-lighterBlack">
            Receba Nossa Newsletter
          </h2>

          <form action="#" method="post" className="flex gap-5 lg:gap-0">
            <input
              className="pl-2 border-[1px] border-black rounded-sm min-w-[200px] lg:min-w-96 py-2 "
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
              required
            />
            <Button
              text="Enviar"
              className="text-white-default font-bold px-5 rounded-md"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
