import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { isLoading } from '../../redux/product/product-selectors';
import { getProductByCategory } from '../../redux/product/product-operations';
import Loader  from '../../components/Loader/Loader';
import ProductList from './ProductList/ProductList';
import { useParams } from "react-router-dom";
import Modal from '../../components/Modal/Modal';
import Footer from 'components/Footer/Footer';
import scss from "./ProductPage.module.scss";
import { useNavigate } from 'react-router-dom';
import {getProductById} from '../../redux/product/product-operations';
import {BiSolidDownArrow} from "react-icons/bi";

const ProductPage = () => {
    const category = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const subcategorySearch = category.subcategory;
    const [product, setProduct] = useState({});
    const [productList, setProductList] = useState({});
    const [filteredProductList, setFilteredProductList] = useState({});
    const [modalActive, setModalActive] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    const [sortMenuFilterPriceActive, setSortMenuFilterPriceActive] = useState(false);
    const [sortMenuFilterColorActive, setSortMenuFilterColorActive] = useState(false);
    const [sortMenuFilterTypeActive, setSortMenuFilterTypeActive] = useState(false);
    const [sortByPrice, setSortByPrice] = useState("За замовчуванням");
    const [sortByColor, setSortByColor] = useState([]);
    const [sortByType, setSortByType] = useState([]);
    const [dataColor, setDataColor] = useState([]);
    const [dataType, setDataType] = useState([]); 

    useEffect(() => {
      if(params.id !== undefined) {
        try {
          dispatch(getProductById(params.id))
          .then(response => {
            setProduct(response.payload.data[0]);
            setModalActive(true);
            navigate(`/catalog/${category.category}/${category.subcategory}/${params.id}`);
          });
        }
        catch(error){
          console.log(error);
        }
      }
      else if(subcategorySearch === undefined) {
        try {
          dispatch(getProductByCategory(params.category))
            .then(response => {
              const dataColors = response.payload.data.map(item => item.color);
              const colors = dataColors.filter((el, id) => dataColors.indexOf(el) === id);
              setDataColor(colors);
              const dataTypes = response.payload.data.map(item => item.type);
              const types = dataTypes.filter((el, id) => dataTypes.indexOf(el) === id);
              setDataType(types);
              const filterNotActive = response.payload.data.filter(item => item.active === true);
              setProductList(filterNotActive);
              const defaultSortByType = [...filterNotActive].sort((a, b) => a.type.substring(0,a.type.indexOf(' ')).split(/,/).join('.') - b.type.substring(0,b.type.indexOf(' ')).split(/,/).join('.'))
              setFilteredProductList(defaultSortByType);
          })  
        }
        catch(error){
          console.log(error);
        };  
      }
      else {
        try {
          dispatch(getProductByCategory(subcategorySearch))
            .then(response => {
              const dataColors = response.payload.data.map(item => item.color);
              const colors = dataColors.filter((el, id) => dataColors.indexOf(el) === id);
              setDataColor(colors);
              const dataTypes = response.payload.data.map(item => item.type);
              const types = dataTypes.filter((el, id) => dataTypes.indexOf(el) === id);
              setDataType(types);
              const filterNotActive = response.payload.data.filter(item => item.active === true);
              setProductList(filterNotActive);
              const defaultSortByType = [...filterNotActive].sort((a, b) => a.type.substring(0,a.type.indexOf(' ')).split(/,/).join('.') - b.type.substring(0,b.type.indexOf(' ')).split(/,/).join('.'))
              setFilteredProductList(defaultSortByType);
          })  
        }
        catch(error){
          console.log(error);
        };  
      }
    // eslint-disable-next-line 
    }, [dispatch, subcategorySearch]);

    useEffect(() => {
      if(Object.keys(productList).length !== 0 ){
        if(sortByColor.length === 0 && sortByType.length === 0){
          const defaultSortByType = [...productList].sort((a, b) => a.type.substring(0,a.type.indexOf(' ')).split(/,/).join('.') - b.type.substring(0,b.type.indexOf(' ')).split(/,/).join('.'))
          setFilteredProductList(defaultSortByType);
        }
        else if(sortByColor.length === 0 && sortByType.length > 0){
          let typeArray = []
          for(const type of sortByType) {
            const filteredList = productList.filter(item => item.type === type)
            typeArray.push(...filteredList);
          }
          if(sortByPrice !== "За замовчуванням"){
            if(sortByPrice === "Від дешевих до дорогих") {
              const sortedList = [...typeArray].sort((a, b) => a.price - b.price);
              setFilteredProductList(sortedList);
            }
            else if(sortByPrice === "Від дорогих до дешевих") {
              const sortedList = [...typeArray].sort((b, a) => a.price - b.price);
              setFilteredProductList(sortedList);
            }
          }
          else {
            setFilteredProductList(typeArray);
          }
        }
        else if(sortByType.length === 0 && sortByColor.length > 0){
          let colorArray = []
          for(const color of sortByColor) {
            const filteredList = productList.filter(item => item.color === color)
            colorArray.push(...filteredList);
          }
          if(sortByPrice !== "За замовчуванням"){
            if(sortByPrice === "Від дешевих до дорогих") {
              const sortedList = [...colorArray].sort((a, b) => a.price - b.price);
              setFilteredProductList(sortedList);
            }
            else if(sortByPrice === "Від дорогих до дешевих") {
              const sortedList = [...colorArray].sort((b, a) => a.price - b.price);
              setFilteredProductList(sortedList);
            }
          }
          else {
            setFilteredProductList(colorArray);
          }
        }
        else if(sortByType.length > 0 && sortByColor.length > 0){
          let colorArray = [];
          for(const color of sortByColor) {
            const filteredList = productList.filter(item => item.color === color)
            colorArray.push(...filteredList);
          };
          let typeArray = [];
          for(const type of sortByType) {
            const filteredList = colorArray.filter(item => item.type === type)
            typeArray.push(...filteredList);
            if(sortByPrice !== "За замовчуванням"){
              if(sortByPrice === "Від дешевих до дорогих") {
                const sortedList = [...typeArray].sort((a, b) => a.price - b.price);
                setFilteredProductList(sortedList);
              }
              else if(sortByPrice === "Від дорогих до дешевих") {
                const sortedList = [...typeArray].sort((b, a) => a.price - b.price);
                setFilteredProductList(sortedList);
              }
            }
            else {
              setFilteredProductList(typeArray);
            }
          };
        }
      }
    // eslint-disable-next-line
    }, [sortByColor, sortByType])

    const fetchProduct = (product) => {
      setProduct(product);
      setModalActive(true);
      if(category.subcategory === undefined) {
        navigate(`/catalog/${category.category}/${category.category}/${product._id}`);
      }
      else {
        navigate(`/catalog/${category.category}/${category.subcategory}/${product._id}`);
      }
    };

    const toggleMenuFilterPrice = () => {
      setSortMenuFilterPriceActive(!sortMenuFilterPriceActive);
    };

    const sortByLowPrice = () => {
      const sortedList = [...filteredProductList].sort((a, b) => a.price - b.price);
      setFilteredProductList(sortedList);
      setSortByPrice("Від дешевих до дорогих");
      setSortMenuFilterPriceActive(false);
    };

    const sortByHighPrice = () => {
      const sortedList = [...filteredProductList].sort((b, a) => a.price - b.price);
      setFilteredProductList(sortedList);
      setSortByPrice("Від дорогих до дешевих");
      setSortMenuFilterPriceActive(false);
    };

    const sortByPriceDefault = () => {
      const defaultSortByType = [...filteredProductList].sort((a, b) => a.type.substring(0,a.type.indexOf(' ')).split(/,/).join('.') - b.type.substring(0,b.type.indexOf(' ')).split(/,/).join('.'))
      setFilteredProductList(defaultSortByType);
      setSortByPrice("За замовчуванням");
      setSortMenuFilterPriceActive(false);
    };

    const toggleMenuFilterColor = () => {
      setSortMenuFilterColorActive(!sortMenuFilterColorActive);
    };

    const toggleMenuFilterType = () => {
      setSortMenuFilterTypeActive(!sortMenuFilterTypeActive);
    }; 

    const onChangeSortByColor = (event) => {
      const value = event.target.value;
      if(sortByColor.includes(value)) {
        const newArray = sortByColor.filter(item => item !== value)
        setSortByColor(newArray);
      }
      else {
        if(sortByColor.length === 0){
          setSortByColor([value]);
        }
        else {
          setSortByColor([...sortByColor, value]);
        }
      }
    };

    const onChangeSortByType = (event) => {
      const value = event.target.value;
      if(sortByType.includes(value)) {
        const newArray = sortByType.filter(item => item !== value)
        setSortByType(newArray);
      }
      else {
        if(sortByType.length === 0){
          setSortByType([value]);
        }
        else {
          setSortByType([...sortByType, value]);
        }
      }
    };

    const discardFilters = () => {
      const defaultSortByType = [...productList].sort((a, b) => a.type.substring(0,a.type.indexOf(' ')).split(/,/).join('.') - b.type.substring(0,b.type.indexOf(' ')).split(/,/).join('.'))
      setFilteredProductList(defaultSortByType);
      setSortByPrice("За замовчуванням");
      setSortMenuFilterPriceActive(false);
      setSortByColor([]);
      setSortMenuFilterColorActive(false);
      setSortByType([]);
      setSortMenuFilterTypeActive(false);
    };

    return (
      <>
        <div className={scss.container}>
        {loading === true? (<Loader/>) :
          (<>
            <div className={scss.product_container}>
              {Object.keys(filteredProductList).length !== 0 && (
                <div className={scss.filter_container}>
                  <div className={scss.filters}>
                      <p className={scss.filter_name}>Сортувати за ціною:</p>
                      <button type='button' onClick={toggleMenuFilterPrice} className={scss.button_sort}>
                        <span className={scss.defaultName}>{sortByPrice}</span>
                        <BiSolidDownArrow className={scss.down_allow}/>
                      </button>
                      {sortMenuFilterPriceActive && (
                          <div className={scss.sortByPrice_wrapper}>
                            {sortByPrice !== "За замовчуванням" && (
                              <button type='button' onClick={sortByPriceDefault}>
                                За замовчуванням
                              </button>
                            )}
                            {sortByPrice !== "Від дешевих до дорогих" && (
                              <button type='button' onClick={sortByLowPrice}>
                                Від дешевих до дорогих
                              </button>
                            )}
                            {sortByPrice !== "Від дорогих до дешевих" && (
                              <button type='button' onClick={sortByHighPrice}>
                                Від дорогих до дешевих
                              </button>
                            )}
                          </div>
                      )}
                  </div>
                  <div className={scss.filters}>
                      <p className={scss.filter_name}>Обрати колір:</p>
                      <button type='button' className={scss.button_sort} onClick={toggleMenuFilterColor}>
                        <span>Всі кольори</span>
                        <BiSolidDownArrow className={scss.down_allow}/>  
                      </button>
                        <div className={sortMenuFilterColorActive ? (scss.colorMenuActive) : (scss.colorMenu)}>
                          <ul>
                            {dataColor.map((color) => {
                              return (
                                <li key={color}>
                                  <input
                                    type="checkbox"
                                    value={color}
                                    name={color}
                                    id={color}
                                    onChange={onChangeSortByColor}
                                    checked={sortByColor.includes(color)}
                                  />
                                  <label htmlFor={color}>{color}</label>
                                </li>
                            )})}
                          </ul>
                        </div>
                  </div>
                  <div className={scss.filters}>
                      <p className={scss.filter_name}>Обрати фасування:</p>
                      <button type='button' className={scss.button_sort} onClick={toggleMenuFilterType}>
                        <span>Всі фасування</span>
                        <BiSolidDownArrow className={scss.down_allow}/>  
                      </button>
                      <div className={sortMenuFilterTypeActive ? (scss.typeMenuActive) : (scss.typeMenu)}>
                          <ul>
                            {dataType.map((type) => {
                              return (
                                <li key={type}>
                                  <input
                                    type="checkbox"
                                    value={type}
                                    name={type}
                                    id={type}
                                    onChange={onChangeSortByType}
                                    checked={sortByType.includes(type)}
                                  />
                                  <label htmlFor={type}>{type}</label>
                                </li>
                            )})}
                          </ul>
                        </div>
                  </div>
                  <button type='button' className={scss.button_cancel} onClick={discardFilters}>Cкинути всі фільтра</button>
                </div>
              )}
              {Object.keys(filteredProductList).length !== 0 ?
                (<ProductList productList={filteredProductList} fetchProduct={fetchProduct}/>)
              : 
              (<p></p>)}
            </div>  
            <Modal 
              modalActive={modalActive} 
              setModalActive={setModalActive} 
              product={product} 
            />
            <Footer/>
          </>)}
        </div>
      </>
    );
};
  
export default ProductPage;









