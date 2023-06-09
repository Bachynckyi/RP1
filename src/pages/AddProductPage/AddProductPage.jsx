import AddProductForm from "components/AddProductForm/AddProductForm";
import { isLoading } from '../../redux/product/product-selectors';
import Loader  from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import scss from './AddProductPage.module.scss';

const AddProduct = () => {
    const loading = useSelector(isLoading);
    return (
        <div className={scss.container}>
            <h1 className={scss.title}>Додати товар</h1>
            {loading ? (<Loader/>) : (<AddProductForm/>)}
        </div>
    );
};
  
export default AddProduct;