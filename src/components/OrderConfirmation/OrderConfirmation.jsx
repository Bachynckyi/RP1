

const OrderConfirmation= () => {

    return (
        <div>
            <form>
                <div>
                    <h2>Контактні дані</h2>
                    <label>Прізвище
                            <input
                            required
                            name='customerName'
                            />
                    </label>
                    <label>Ім'я
                        <input
                        required
                        name='customerName'
                        />
                    </label>
                    <label>Телефон
                        <input
                        required
                        name='customerPhone'
                        />
                    </label>
                </div>
                <div>
                    <h2>Доставка</h2>
                    <div>
                        
                    </div>
                </div>
            </form>
        </div>
    )
  };
  
export default OrderConfirmation;
