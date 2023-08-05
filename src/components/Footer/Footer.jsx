import scss from './Footer.module.scss';
import {FaViber} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";

const Footer = () => {
  return (
        <div className={scss.container}>
          <div className={scss.contacts_container}>
            <address className={scss.address}>Адреса: Україна, м.Київ, вул. Магнітогорська буд.5 </address>
            <p className={scss.schedule}>Режим роботи: Пн-Пт 9:00 – 17:00</p>
            <p className={scss.contacts_item}>Телефон:
              <a className={scss.contacts_link} href="tel:+380991585152"> +38 (099) 158 51 52</a>
            </p>
            <p className={scss.contacts_item}>Електронна пошта:
              <a className={scss.contacts_link} href="mailto:color-farb@gmail.com"> color-farb@gmail.com</a>
            </p>
          </div>
          <div className={scss.messengers_link}>
              <FaTelegram className={scss.messenger}/>
              <FaViber className={scss.messenger}/>
              <FaWhatsapp className={scss.messenger}/>
          </div>
        </div>
  );
};

export default Footer;