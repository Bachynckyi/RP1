import AddCategoryForm from "components/AddCategoryForm/AddCategoryForm";
import { isLoading } from '../../redux/category/category-selectors';
import Loader  from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import scss from './AddCategoryPage.module.scss';
import { userEmail } from 'redux/auth/auth-selectors';
import ForbiddenPage from "pages/ForbiddenPage/ForbiddenPage";

const AddCategory = () => {
    const loading = useSelector(isLoading);
    const userEmailVerify = useSelector(userEmail);

    return (
        <>
            {userEmailVerify === "colorfarb@gmail.com" ? (
                <div className={scss.container}>
                    <h1 className={scss.title}>Додати категорію</h1>
                    {loading ? (<Loader/>) : (<AddCategoryForm/>)}
                </div>)
            : (<ForbiddenPage/>)}
        </>
    );
};
  
export default AddCategory;