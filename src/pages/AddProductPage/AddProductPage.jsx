import AddProductForm from "components/AddProductForm/AddProductForm";
import { isLoading } from '../../redux/product/product-selectors';
import Loader  from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import scss from './AddProductPage.module.scss';
import { userEmail } from 'redux/auth/auth-selectors';
import ForbiddenPage from "pages/ForbiddenPage/ForbiddenPage";

const AddProduct = () => {
    const loading = useSelector(isLoading);
    const userEmailVerify = useSelector(userEmail);

    return (
        <>
            {userEmailVerify === "colorfarb@gmail.com" ? (
            <div className={scss.container}>
                <h1 className={scss.title}>Додати товар</h1>
                {loading ? (<Loader/>) : (<AddProductForm/>)}
            </div>)
            : (<ForbiddenPage/>)}
        </>
    );
};
  
export default AddProduct;