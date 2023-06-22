
import scss from './CatalogItem.module.scss';

const CatalogItem = ({title, photo, name, pickCategory}) => {

    const handlePicker = (event) => {
        pickCategory(event.currentTarget.id);
    };

    return (
        <li onClick={handlePicker} className={scss.catalog_link} id={name} >
            <img
                className={scss.image_link}
                src={photo}
                alt={title}
            />
            <p className={scss.image_title}>{title}</p>
        </li>
    );
  };
  
export default CatalogItem;