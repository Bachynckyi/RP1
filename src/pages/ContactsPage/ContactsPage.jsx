import scss from './ContactsPage.module.scss';

const ContactsPage = () => {

    return (
      <div className={scss.container}>
        <h1 className={scss.title_main}>Контакти</h1>
        <h2 className={scss.title}>Офіс та склад</h2>
        <address className={scss.address}>Адреса: Україна, м. Київ , вул. Драгоманова 23, офіс 555</address>
        <p className={scss.schedule}>Режим роботи: Пн-Пт 9:00 – 17:00</p>
        <p className={scss.contacts_item}>Телефон:
          <a className={scss.constacts_link} href="tel:+380991111111"> +38 099 111 11 11</a>
        </p>
        <p className={scss.contacts_item}>Електронна пошта:
          <a className={scss.constacts_link} href="mailto:test@example.com"> color-farb@gmail.com</a>
        </p>
      </div>
    );
  };
  
  export default ContactsPage;