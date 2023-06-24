import AddCategoryForm from "components/AddCategoryForm/AddCategoryForm";
import { isLoading } from '../../redux/category/category-selectors';
import Loader  from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import scss from './AddCategoryPage.module.scss';

const AddCategory = () => {
    const loading = useSelector(isLoading);
    return (
        <div className={scss.container}>
            <h1 className={scss.title}>Додати категорію</h1>
            {loading ? (<Loader/>) : (<AddCategoryForm/>)}
        </div>
    );
};
  
export default AddCategory;