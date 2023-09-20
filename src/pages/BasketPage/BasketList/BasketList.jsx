import { useEffect, useState } from 'react';
import BasketItem from '../BasketItem/BasketItem';
import scss from './/BasketList.module.scss';

const BasketList = ({newOrder, basket}) => {
    const [totalAmount,setTotalAmount] = useState(0);
    const [status, setStatus] = useState(false);
    const [products, setProducts] = useState(null);

    const updateOrder = (updatedOrder) => {
        newOrder(updatedOrder);
        setStatus(true);
    };

    useEffect(() => {
        setTotalAmount(basket.reduce((prev, curr) => { 
            return (Number(prev) + Number(curr.price)*Number(curr.quantity)).toFixed(2)}, ""))
        const elements = basket.map(({ _id, ...product }) => {
            return (
                <BasketItem key={_id} product={product} _id={_id} updateOrder={updateOrder} basket={basket}/>
            );
        });
        setProducts(elements);
        setStatus(false);
// eslint-disable-next-line
    }, [status])

    return (
        <div className={scss.list_container}>
            <h2 className={scss.title}>Оформлення замовлення</h2>
            <ol className={scss.basket_list}>{products}</ol>
            <p className={scss.totalAmount}>Сума до сплати: {totalAmount} грн</p>
        </div>
    );
};

export default BasketList;