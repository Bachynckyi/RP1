import SubcategoryList from "./SubcategoryList/SubcategoryList";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { isLoading } from '../../../redux/subcategory/subcategory-selectors';
import { getAllSubcategories } from '../../../redux/subcategory/subcategory-operations';
import Loader  from '../../../components/Loader/Loader';
import scss from './UpdateSubcategoryPage.module.scss';
import Footer from "components/Footer/Footer";
import Modal from './ModalSubcategory/ModalSubcategory';

const SubcategoryPage = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const [subcategories, setSubcategories] = useState({});
    const [pickedSubcategory, setPickedSubcategory] = useState(null);
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        try {
            dispatch(getAllSubcategories())
                .then(response => setSubcategories(response.payload.data));
        }
        catch(error) {
            console.log(error)
        }

    }, [dispatch]);

    const fetchSubcategory = (nameSubcategory, photoSubcategory, descriptionSubcategory, _id) => {
        setPickedSubcategory({
            nameSubcategory: nameSubcategory, 
            photoSubcategory:photoSubcategory,
            descriptionSubcategory: descriptionSubcategory,
            _id: _id,
        })
        setModalActive(true);
    };

    return (
        <div >
            {loading === true ? (<Loader/>) : (
                <div >
                    {Object.keys(subcategories).length !== 0 &&
                    (<>
                        <div className={scss.container}>
                            <h1 className={scss.title}>Змінити підкатегорії товарів</h1>
                            <SubcategoryList 
                                subcategories={subcategories} 
                                fetchSubcategory={fetchSubcategory}
                            />
                        </div>
                        {pickedSubcategory !== null && (
                            <Modal 
                                modalActive={modalActive} 
                                setModalActive={setModalActive}
                                pickedSubcategory={pickedSubcategory}
                            />
                        )}
                        <Footer/>
                    </>)}
                </div>
            )} 
        </div>
    );
  };
  
export default SubcategoryPage;



