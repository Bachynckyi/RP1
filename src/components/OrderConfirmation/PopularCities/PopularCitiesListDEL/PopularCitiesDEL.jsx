import scss from "./PopularCitiesDEL.module.scss";

const PopularCitiesListDEL = ({pickedPopularCity}) => {

    const handlePicker = ({target}) => {
        const locality = target.innerText;
        const Ref = target.id
        pickedPopularCity(locality, Ref)
    };

    return (
        <div>
            <ul className={scss.courier_list}>
                <li className={scss.item} onClick={handlePicker} id="16617df3-a42a-e311-8b0d-00155d037960">Київ</li>
                <li className={scss.item} onClick={handlePicker} id="a8fa4093-d12a-e311-8b0d-00155d037960">Одеса</li>
                <li className={scss.item} onClick={handlePicker} id="d2ea868c-2829-e311-8b0d-00155d037960">Дніпро</li>
                <li className={scss.item} onClick={handlePicker} id="4577d856-322b-e311-8b0d-00155d037960">Харьків</li>
                <li className={scss.item} onClick={handlePicker} id="8245582e-b72a-e311-8b0d-00155d037960">Львів</li>
                <li className={scss.item} onClick={handlePicker} id="200d8f11-872a-e311-8b0d-00155d037960">Запоріжжя</li>
                <li className={scss.item} onClick={handlePicker} id="b4963dbe-3029-e311-8b0d-00155d037960">Кривий Ріг</li>
                <li className={scss.item} onClick={handlePicker} id="ce45582e-b72a-e311-8b0d-00155d037960">Миколаїв</li>
                <li className={scss.item} onClick={handlePicker} id="75491888-1429-e311-8b0d-00155d037960">Вінниця</li>
                <li className={scss.item} onClick={handlePicker} id="7772f5ae-d62a-e311-8b0d-00155d037960">Полтава</li>
                <li className={scss.item} onClick={handlePicker} id="aa3250a4-402b-e311-8b0d-00155d037960">Черкаси</li>
                <li className={scss.item} onClick={handlePicker} id="d52719df-3d2b-e311-8b0d-00155d037960">Хмельницький</li>
                <li className={scss.item} onClick={handlePicker} id="a90b5653-422b-e311-8b0d-00155d037960">Чернівці</li>
                <li className={scss.item} onClick={handlePicker} id="c1034c42-462b-e311-8b0d-00155d037960">Чернігів</li>
                <li className={scss.item} onClick={handlePicker} id="2b2b50ac-7f2a-e311-8b0d-00155d037960">Житомир</li>
                <li className={scss.item} onClick={handlePicker} id="088d7257-a82a-e311-8b0d-00155d037960">Кропивницький</li>
                <li className={scss.item} onClick={handlePicker} id="52453596-8c2a-e311-8b0d-00155d037960">Ивано-Франківск</li>
                <li className={scss.item} onClick={handlePicker} id="ed2fbf5c-de2a-e311-8b0d-00155d037960">Рівне</li>
                <li className={scss.item} onClick={handlePicker} id="7c4fe0a3-302b-e311-8b0d-00155d037960">Тернопіль</li>
                <li className={scss.item} onClick={handlePicker} id="f01c7915-d52a-e311-8b0d-00155d037960">Кременчук</li>
            </ul>
        </div>
    );
};

export default PopularCitiesListDEL;