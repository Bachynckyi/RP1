// import { useState } from 'react';
import BasketItem from '../BasketItem/BasketItem';

const BasketList = ({basket}) => {
    // const [totalAmount, setTotalamount] = useState();

    const elements = basket.map(({ _id, ...props }) => {
        return (
            <BasketItem key={_id} {...props} _id={_id}/>
        );
    });

    return (
        <div>
            <h2>Товари до замовлення</h2>
            <ol>{elements}</ol>
            <p>Сума до сплати: </p>
            <button>Оформити замовлення</button>
        </div>
    );
};

export default BasketList;