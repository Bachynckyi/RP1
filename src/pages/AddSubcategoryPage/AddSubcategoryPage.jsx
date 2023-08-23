import { isLoading } from '../../redux/subcategory/subcategory-selectors';
import Loader  from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import scss from './AddSubcategoryPage.module.scss';
import AddSubcategoryForm from 'components/AddSubcategoryForm/AddSubcategoryForm';
import { userEmail } from 'redux/auth/auth-selectors';
import ForbiddenPage from "pages/ForbiddenPage/ForbiddenPage";

const AddSubCategory = () => {
    const loading = useSelector(isLoading);
    const userEmailVerify = useSelector(userEmail);

    return (
        <>
            {userEmailVerify === "colorfarb@gmail.com" ? (
            <div className={scss.container}>
                <h1 className={scss.title}>Додати підкатегорію</h1>
                {loading ? (<Loader/>) : (<AddSubcategoryForm/>)}
            </div>)
            : (<ForbiddenPage/>)}
        </>
    );
};
  
export default AddSubCategory;