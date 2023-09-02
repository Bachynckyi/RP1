import scss from './PopularCities.module.scss'

const PopularCitiesList = ({pickedPopularCity}) => {

    const handlePicker = ({target}) => {
        const locality = target.innerText;
        const Ref = target.id
        pickedPopularCity(locality, Ref)
    };

    return (
        <div>
            <ul className={scss.courier_list}>
                <li className={scss.item} onClick={handlePicker} id="8d5a980d-391c-11dd-90d9-001a92567626">Київ</li>
                <li className={scss.item} onClick={handlePicker} id="db5c88d0-391c-11dd-90d9-001a92567626">Одеса</li>
                <li className={scss.item} onClick={handlePicker} id="db5c88f0-391c-11dd-90d9-001a92567626">Дніпро</li>
                <li className={scss.item} onClick={handlePicker} id="db5c88e0-391c-11dd-90d9-001a92567626">Харьків</li>
                <li className={scss.item} onClick={handlePicker} id="db5c88f5-391c-11dd-90d9-001a92567626">Львів</li>
                <li className={scss.item} onClick={handlePicker} id="db5c88c6-391c-11dd-90d9-001a92567626">Запоріжжя</li>
                <li className={scss.item} onClick={handlePicker} id="db5c890d-391c-11dd-90d9-001a92567626">Кривий Ріг</li>
                <li className={scss.item} onClick={handlePicker} id="db5c888c-391c-11dd-90d9-001a92567626">Миколаїв</li>
                <li className={scss.item} onClick={handlePicker} id="db5c88de-391c-11dd-90d9-001a92567626">Вінниця</li>
                <li className={scss.item} onClick={handlePicker} id="db5c8892-391c-11dd-90d9-001a92567626">Полтава</li>
                <li className={scss.item} onClick={handlePicker} id="db5c8902-391c-11dd-90d9-001a92567626">Черкаси</li>
                <li className={scss.item} onClick={handlePicker} id="db5c88ac-391c-11dd-90d9-001a92567626">Хмельницький</li>
                <li className={scss.item} onClick={handlePicker} id="e221d642-391c-11dd-90d9-001a92567626">Чернівці</li>
                <li className={scss.item} onClick={handlePicker} id="db5c897c-391c-11dd-90d9-001a92567626">Чернігів</li>
                <li className={scss.item} onClick={handlePicker} id="db5c88c4-391c-11dd-90d9-001a92567626">Житомир</li>
                <li className={scss.item} onClick={handlePicker} id="db5c891b-391c-11dd-90d9-001a92567626">Кропивницький</li>
                <li className={scss.item} onClick={handlePicker} id="db5c8904-391c-11dd-90d9-001a92567626">Ивано-Франківск</li>
                <li className={scss.item} onClick={handlePicker} id="db5c896a-391c-11dd-90d9-001a92567626">Рівне</li>
                <li className={scss.item} onClick={handlePicker} id="db5c8900-391c-11dd-90d9-001a92567626">Тернопіль</li>
                <li className={scss.item} onClick={handlePicker} id="8d5a9813-391c-11dd-90d9-001a92567626">Кременчук</li>
            </ul>
        </div>
    );
};

export default PopularCitiesList;