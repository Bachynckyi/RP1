import Footer from 'components/Footer/Footer';
import scss from './ContactsPage.module.scss';

const ContactsPage = () => {

    return (
      <>
        <div className={scss.container}>
          <h1 className={scss.title_main}>Контакти</h1>
          <h2 className={scss.title}>«ТОВ ВКФ Колор-Фарб» (головний офіс)</h2>
          <address className={scss.address}>Адреса: Україна, м.Київ, вул, Магнітогорська буд.5 </address>
          <p className={scss.schedule}>Режим роботи: Пн-Пт 9:00 – 17:00</p>
          <p className={scss.contacts_item}>Телефон:
            <a className={scss.contacts_link} href="tel:+380991111111"> +38 (099) 158 51 52</a>
          </p>
          <p className={scss.contacts_item}>Електронна пошта:
            <a className={scss.contacts_link} href="mailto:test@example.com"> color-farb@gmail.com</a>
          </p>
        </div>
        <Footer/>
      </>
    );
  };
  
  export default ContactsPage;