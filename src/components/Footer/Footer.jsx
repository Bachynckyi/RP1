import scss from './Footer.module.scss';

const Footer = () => {
  return (
        <div className={scss.container}>
          <div className={scss.contacts_container}>
            <address className={scss.address}>Адреса: Україна, м.Київ, вул. Магнітогорська буд.5 </address>
            <p className={scss.schedule}>Режим роботи: Пн-Пт 9:00 – 17:00</p>
            <p className={scss.contacts_item}>Телефон:
              <a className={scss.contacts_link} href="tel:+380991111111"> +38 (099) 158 51 52</a>
            </p>
            <p className={scss.contacts_item}>Електронна пошта:
              <a className={scss.contacts_link} href="mailto:test@example.com"> color-farb@gmail.com</a>
            </p>
          </div>
        </div>
  );
};

export default Footer;