import scss from './ProductItem.module.scss';

const ProductItem = ({photo, title, description, price, type, color, code, _id, pickedProduct}) => {

    const product = {photo, title, description, price, type, color, code, _id}

    const handlePicker = () => {
        pickedProduct(product)
    };

    return (
        <li className={scss.catalog_link} onClick={handlePicker}>
            <img
                className={scss.image_link}
                src={photo}
                alt={title}
            />
            <p className={scss.image_title}>{title}</p>
        </li>
    );
  };
  
export default ProductItem;