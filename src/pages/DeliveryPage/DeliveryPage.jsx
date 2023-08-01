import scss from './DeliveryPage.module.scss';
import Footer from "components/Footer/Footer";

const DeliveryPage = () => {

  return (
    <>
      <div className={scss.container}>
        <div className={scss.part}>
              <h2 className={scss.title}>Замовлення</h2>
              <p>Товар доставляється протягом 1-3 робочих днів з моменту надходження замовлення. При безготівковій оплаті – протягом 1-3 робочих днів з моменту надходження коштів на наш рахунок. Термін доставки замовлених позицій обговорюється з менеджерами окремо.</p>
        </div>
          <div className={scss.part}>
            <div className={scss.title_container}>
              <h2 className={scss.title}>Доставка</h2>
            </div>
            <ol>
              <li>Нова Пошта (включаючи накладений платіж)</li>
              <li>Самовивіз зі складу в місті Києві</li>
              <li>Делівері (без можливості доставки з післяплатою)</li>
              <li>Доставка автомобілем по місту Києву (при замовленні від 400 кг)</li>
            </ol>
          </div>
        <div>
          <h2>Оплата</h2>
          <ol>
            <li>Післяплата "Нова Пошта"</li>
            <li>Готівкою</li>
            <li>Безготівковий розрахунок </li>
            <p>Оплата за безготівковим розрахунком доступна для юридичних осіб. Для підтвердження замовлення покупцеві електронним листом направляється рахунок-фактура на оплату. Для оформлення рахунку-фактури для юридичних осіб потрібне надання сканованої копії реєстраційних документів (коду ЄДРПОУ та свідоцтва платника ПДВ), які необхідно відправити електронною поштою на адресу color-farb@gmail.com. </p>
          </ol>
        </div>
        <div className={scss.part}>
          <h2 className={scss.title}>Повернення товару</h2>
          <p className={scss.sentences}>Товар, придбаний в інтернет-магазині COLOR-FARB.ua можна обміняти (повернути) протягом 14 днів з моменту покупки, згідно з Законом України "Про захист прав споживача".</p>
          <p className={scss.sentences}>До повернення приймається товар належної якості, який не використовувався, збережені: товарний вигляд товару, його споживчі властивості, пломби. Доставка за повернення товару оплачується покупцем.  Повернення грошей здійснюється протягом 3-х днів з моменту отримання товару.</p>
          <p className={scss.sentences}>Нестандартний товар, що був виготовлений за індивідуальним замовленням Покупця, наприклад, тонована фарба, не підлягає поверненню.</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default DeliveryPage;
