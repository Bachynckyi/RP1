import Footer from 'components/Footer/Footer';
import scss from './ContactsPage.module.scss';

const ContactsPage = () => {
  

    return (
      <>
        <h1 className={scss.title_main}>Контакти</h1>
        <div className={scss.container}>
          <div className={scss.contacts_container}>
            <h2 className={scss.title}>«ТОВ ВКФ Колор-Фарб» (головний офіс)</h2>
            <address className={scss.address}>Адреса: Україна, м.Київ, вул. Біломорська, буд.2 </address>
            <p className={scss.schedule}>Режим роботи: Пн-Пт 9:00 – 17:00</p>
            <p className={scss.contacts_item}>Телефон:
              <a className={scss.contacts_link} href="tel:+380991585152"> +38 (099) 158 51 52</a>
            </p>
            <p className={scss.contacts_item}>Електронна пошта:
              <a className={scss.contacts_link} href="mailto:color-farb@gmail.com"> color-farb@gmail.com</a>
            </p>
          </div>
          <div className={scss.map_container}>
            <iframe
              title="GoogleMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d723.1233671765029!2d30.64578847072786!3d50.46020876854518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daae51f85e73%3A0x3e8a99b083eb1a9e!2z0KLQpiDQktCw0Ygg0JTQvtC8INCc0LDQs9Cw0LfQuNC9INCc0LXQsdC10LvQuCwg0JzQtdCx0LXQu9GM0L3Ri9C5INCh0LDQu9C-0L0sINCa0YPQv9C40YLRjCDQlNC40LLQsNC9INCc0LDRgtGA0LDRgSDQmtGA0L7QstCw0YLRjCDQmtGD0YXQvdGO!5e0!3m2!1sru!2sua!4v1692780736448!5m2!1sru!2sua" 
              style={{width: "100%", height: "100%", border: "0", allowFullScreen:"", loading:"lazy", referrerPolicy: "no-referrer-when-downgrade"}}>
            </iframe>
          </div>
        </div>
        <Footer/>
      </>
    );
  };
  
  export default ContactsPage;

