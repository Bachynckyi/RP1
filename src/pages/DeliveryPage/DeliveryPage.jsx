import scss from './DeliveryPage.module.scss';
import Footer from "components/Footer/Footer";

const DeliveryPage = () => {

  return (
    <>
      <div className={scss.container}>
        <h1 className={scss.title}>Доставка</h1>
          <div className={scss.part}> 
            <h2 className={scss.title}>Замовлення</h2>
            <p className={scss.sentences}>Замовлення, оформлені до 12:00, доставляються по Києву на наступний робочий день, по Україні – 24-72 години в залежності від регіону, в який відправляється товар. Документи, що підтверджують факт купівлі товару, направляються разом з товаром.</p>
            <ol className={scss.list}>Доставка товарів здійснюється:
              <li className={scss.list_item}>Самовивіз в Києві зі складу компанії ${}.</li>
              <li className={scss.list_item}>По Україні поштовою компанією «Нова пошта»:
                <ul> 
                  <li className={scss.list_item}>доставка в відділення перевізника «Нова пошта». Актуальний перелік центрів видачі посилок і графік їх роботи, умови і графік кур'єрської доставки представлені на офіційному сайті перевізника</li>
                  <li className={scss.list_item}>адресна доставка по Україні - згідно з діючими тарифами перевізника, може бути узгоджена індивідуально.</li>
                </ul>
              </li>
            </ol>
            <p className={scss.sentences}>У разі неотримання замовлення протягом 4-х днів після доставки на відділення «Нової пошти», товар повертається відправнику, а замовлення анулюється.</p>
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