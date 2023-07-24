import { useEffect, useState } from 'react';
import BasketItem from '../BasketItem/BasketItem';

const BasketList = ({newOrder}) => {
    const [totalAmount,setTotalAmount] = useState(0);
    const [status, setStatus] = useState(false);
    const currentOrder = JSON.parse(localStorage.getItem("order"));

    useEffect(() => {
        setTotalAmount(currentOrder.reduce((prev, curr) => { return Number(prev) + Number(curr.price)*curr.quantity}, ""))
        setStatus(false)
    }, [currentOrder, status])

    const updateOrder = (updatedOrder) => {
        newOrder(updatedOrder)
    };

    const updatedQuantity = () => {
        setStatus(true)
    };

    const elements = currentOrder.map(({ _id, ...product }) => {
        return (
            <BasketItem key={_id} product={product} _id={_id} updateOrder={updateOrder} updatedQuantity={updatedQuantity}/>
        );
    });

    return (
        <div>
            <h2>Товари до замовлення</h2>
            <ol>{elements}</ol>
            <p>Сума до сплати: {JSON.stringify(totalAmount)} грн</p>
        </div>
    );
};

export default BasketList;