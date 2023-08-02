import scss from './ProductItem.module.scss';

const ProductItem = ({photo, title, description, price, type, color, code, _id, pickedProduct}) => {

    const product = {photo, title, description, price, type, color, code, _id}

    const handlePicker = () => {
        pickedProduct(product)
    };

    return (
        <li className={scss.product_link} onClick={handlePicker}>
            <img
                className={scss.image_link}
                src={photo}
                alt={title}
            />
            <div className={scss.info_container}>
                <p className={scss.image_title}>{title}</p>
                <p className={scss.color}>Колір: <b className={scss.color_type}>{color}</b></p>
                <p className={scss.type}>Фасування: <b className={scss.color_type}>{type}</b></p>
            </div>
        </li>
    );
  };
  
export default ProductItem;