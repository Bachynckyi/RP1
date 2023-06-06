import AddProductForm from "components/AddProductForm/AddProductForm";
import scss from './AddProductPage.module.scss';

const AddProduct = () => {
    return (
        <div className={scss.container}>
            <h1 className={scss.title}>Додати товар</h1>
            <AddProductForm/>
        </div>
    );
};
  
export default AddProduct;