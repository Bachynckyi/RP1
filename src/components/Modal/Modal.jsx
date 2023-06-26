import scss from './Modal.module.scss';

const Modal = ({active, setActive, product}) => {
    const {title, photo, price, type, color, code, description} = product
    return (
  
        <div className={!active ? (scss.modal) : (scss.modal_active)} onClick={() => setActive(false)}>
            <div className={!active ? (scss.modal_content) : (scss.modal_content_active)} onClick={e => e.stopPropagation()}>
                <h1>{title}</h1>
                <img 
                    className={scss.photo}
                    src={photo}
                    alt={title}
                />
                <p>Ціна: {price} грн</p>
                <p>Фасовка: {type}</p>
                <p>Колір: {color}</p>
                <p>Код товару: {code}</p>
                <p>Опис: {description}</p>
            <button type='button' onClick={() => setActive(false)}>закрыть</button>
            </div>
        </div>
    )
  };
  
export default Modal;


