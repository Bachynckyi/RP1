import scss from './CategoryItem.module.scss';

const CategoryItem = ({nameCategory, photoCategory, category, pickCategory, descriptionCategory}) => {

    const handlePicker = (event) => {
        pickCategory(event.currentTarget.id);
    };

    console.log(descriptionCategory)

    return (
        <li onClick={handlePicker} className={scss.category_link} id={category}>
            <div className={scss.action}>
                <img
                    className={scss.image_link}
                    src={photoCategory}
                    alt={nameCategory}
                />
                <div className={scss.description_container}>
                    <p className={scss.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.</p>
                </div>
            </div>
            <div className={scss.title_container}>
            <p className={scss.image_title}>{nameCategory}</p>
            </div>
        </li>
    );
  };
  
export default CategoryItem;