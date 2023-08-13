import { useEffect, useState } from 'react';
import BasketItem from '../BasketItem/BasketItem';
import scss from './/BasketList.module.scss';

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
        <div className={scss.list_container}>
            <h2 className={scss.title}>Товари до замовлення</h2>
            <ol className={scss.basket_list}>{elements}</ol>
            <p className={scss.totalAmount}>Сума до сплати: {JSON.stringify(totalAmount)} грн</p>
        </div>
    );
};

export default BasketList;