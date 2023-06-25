
const ProductItem = ({photo, title }) => {

    return (
        <li>
            <img
                src={photo}
                alt={title}
            />
            <p>{title}</p>
        </li>
    );
  };
  
export default ProductItem;