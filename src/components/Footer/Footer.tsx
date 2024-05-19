import React from 'react'
import { Facebook, Linkedin, Instagram, Youtube, Mastercard, Visa, Maeztra, Vtex } from '../../data'

const Footer = () => {
  return (
    <section>
      <footer className="bg-lighterBlack h-[233px]">
        <div className="footer__bottom--row-1 flex flex-col gap-8">
          <div className="footer__bottom--row-1---social flex items-center justify-evenly pt-6">
            <a href={Facebook}><img src={Facebook} alt="Facebook" /></a>
            <a href={Linkedin}><img src={Linkedin} alt="Linkedin" /></a>
            <a href={Instagram}><img src={Instagram} alt="Instagram" /></a>
            <a href={Youtube}><img src={Youtube} alt="Youtube" /></a>
          </div>
          <div className="footer__bottom--row-1---cards flex items-center justify-evenly">
            <img src={Visa} alt="Visa" />
            <img src={Mastercard} alt="Mastercard" />
            <img src={Visa} alt="Visa" />
            <img src={Mastercard} alt="Mastercard" />
          </div>
          <div className="footer__bottom--row-1---brands flex items-center justify-evenly">
            <div>
              <span className="text-white-default">Powered By</span>
              <img src={Vtex} alt="Vtex" />
            </div>
            <div>
              <span className="text-white-default">Powered By</span>
              <img src={Maeztra} alt="Visa" />
            </div>


          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer