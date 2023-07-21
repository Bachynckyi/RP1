import { useEffect, useState } from 'react';
import BasketItem from '../BasketItem/BasketItem';

const BasketList = ({basket, newOrder}) => {
    const [totalAmount,setTotalAmount] = useState({});

    useEffect(() => {
        setTotalAmount(basket.reduce((prev, curr) => { return Number(prev) + Number(curr.price)*curr.quantity}, ""))
    }, [basket])

    const updateOrder = (updatedOrder) => {
        newOrder(updatedOrder)
    };

    const elements = basket.map(({ _id, ...product }) => {
        return (
            <BasketItem key={_id} product={product} _id={_id} updateOrder={updateOrder}/>
        );
    });

    return (
        <div>
            <h2>Товари до замовлення</h2>
            <ol>{elements}</ol>
            <p>Сума до сплати: {JSON.stringify(totalAmount)} грн</p>
            <button>Оформити замовлення</button>
        </div>
    );
};

export default BasketList;