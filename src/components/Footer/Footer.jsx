import scss from './Footer.module.scss';
import {FaViber} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
        <div className={scss.footer_container}>
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
            <div className={scss.messengers_container}>
              <h2 className={scss.messenger_title}>Зв'язатись з нами</h2>
              <div className={scss.messenger_links}>
                  <Link className={scss.messenger} to="tg://resolve?domain=sob_yar">
                    <FaTelegram className={scss.messenger_icon}/>
                    <p className={scss.messenger_name}>Telegram</p>
                  </Link>
                  <Link className={scss.messenger} to="viber://chat?number=%2B380991585152">
                    <FaViber className={scss.messenger_icon}/>
                    <p className={scss.messenger_name}>Viber</p>
                  </Link>
                  <Link className={scss.messenger} to="https://api.whatsapp.com/send/?phone=+380991585152">
                    <FaWhatsapp className={scss.messenger_icon}/>
                    <p className={scss.messenger_name}>WhatsApp</p>
                  </Link>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Footer;