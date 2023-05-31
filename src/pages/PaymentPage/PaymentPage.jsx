import scss from './PaymentPage.module.scss';

const PaymentPage = () => {

    return (
      <div className={scss.container}>
        <h1 className={scss.title_main}>Оплата</h1>
        <p className={scss.sentences}>Оплатити замовлення можна  безготівковим платежем на сайті Інтернет-магазину COLOR-FARB.ua.</p>
        <h2 className={scss.title}>Безготівковий розрахунок</h2>
        <p className={scss.sentences}>Оплата за безготівковим розрахунком доступна для юридичних осіб. Для підтвердження замовлення покупцеві електронним листом направляється рахунок-фактура на оплату.</p>
        <p className={scss.sentences}>Для оформлення рахунку-фактури для юридичних осіб потрібне надання сканованої копії реєстраційних документів (коду ЄДРПОУ та свідоцтва платника ПДВ), які необхідно відправити електронною поштою на адресу ${}.</p>
      </div>

    );
  };
  
  export default PaymentPage;