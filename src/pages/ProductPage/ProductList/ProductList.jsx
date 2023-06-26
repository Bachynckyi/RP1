import ProductItem from '../ProductItem/ProductItem';
import scss from './ProductList.module.scss';

const ProductList = ({productList, fetchProduct}) => {
    
    const pickedProduct = (product) => {
        fetchProduct(product)
    };
    
    const elements = productList.map(({ _id, ...props }) => {
        return (
            <ProductItem key={_id} {...props} _id={_id} pickedProduct={pickedProduct}/>
    )})

    return (
        <div>
            <ul className={scss.catalog_list}>{elements}</ul>
        </div>
    );
};

export default ProductList;