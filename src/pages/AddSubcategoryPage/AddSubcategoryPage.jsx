import { isLoading } from '../../redux/subcategory/subcategory-selectors';
import Loader  from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import scss from './AddSubcategoryPage.module.scss';
import AddSubcategoryForm from 'components/AddSubcategoryForm/AddSubcategoryForm';

const AddSubCategory = () => {
    const loading = useSelector(isLoading);
    return (
        <div className={scss.container}>
            <h1 className={scss.title}>Додати підкатегорію</h1>
            {loading ? (<Loader/>) : (<AddSubcategoryForm/>)}
        </div>
    );
};
  
export default AddSubCategory;