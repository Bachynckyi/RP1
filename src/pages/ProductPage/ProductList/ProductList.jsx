import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({product}) => {
    
    const elements = product.map(({ _id, ...props }) => {
        return (
            <ProductItem key={_id} {...props} _id={_id}/>
    )})

    return (
        <div>
            <ul>{elements}</ul>
        </div>
    );
};

export default ProductList;