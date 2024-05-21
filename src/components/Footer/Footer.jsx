import React from "react";
import "./footer.css";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Mastercard,
  Visa,
  Maeztra,
  Vtex,
  navFooter,
} from "../../data";

const Footer = () => {
  return (
    <section>
      <footer>
        {/* Footer Main Mobile */}
        <div className="footer__main--mobile flex flex-col items-center lg:hidden">
          {navFooter.map((item, index) => (
            <details key={index}>
              <summary>{item.title}</summary>
              <ul className="footer__main--mobile--item--list">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.path}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
        {/* Footer Main Desktop */}
        <div className="footer__main--desktop hidden lg:flex lg:justify-around lg:mt-10 lg:mb-1 lg:pb-16">
          {navFooter.map((item, index) => {
            return (
              <div
                className="footer__main--desktop--item flex flex-col gap-6"
                key={index}
              >
                <h3 className="text-lighterBlack text-lg font-bold ">
                  {item.title}
                </h3>
                <ul className="footer__main--desktop--item--list flex flex-col gap-6">
                  {item.links.map((link, index) => {
                    return (
                      <li key={index}>
                        <a href={link.path}>{link.text}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="footer__bottom bg-lighterBlack h-[233px] lg:h-[120px]">
          <div className="footer__bottom--row-1 flex flex-col gap-8 lg:flex lg:flex-row lg:justify-around lg:items-center lg:py-[26px]">
            <div className="footer__bottom--row-1---social px-[45px] flex items-center justify-evenly pt-6 lg:pt-0 lg:gap-[22px]">
              <a href={Facebook}>
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href={Linkedin}>
                <img src={Linkedin} alt="Linkedin" />
              </a>
              <a href={Instagram}>
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href={Youtube}>
                <img src={Youtube} alt="Youtube" />
              </a>
            </div>
            <div className="footer__bottom--row-1---cards px-[40px]  flex items-center justify-evenly lg:gap-[22px] lg:pt-[5px]">
              <img src={Visa} alt="Visa" />
              <img src={Mastercard} alt="Mastercard" />
              <img src={Visa} alt="Visa" />
              <img src={Mastercard} alt="Mastercard" />
            </div>
            <div className="footer__bottom--row-1---brands flex items-center justify-evenly lg:gap-[22px] ">
              <div>
                <span className="text-white-default">Powered By</span>
                <img className="mt-2" src={Vtex} alt="Vtex" />
              </div>
              <div>
                <span className="text-white-default">Powered By</span>
                <img className="mt-2" src={Maeztra} alt="Visa" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
