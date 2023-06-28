import { useState } from 'react';
import scss from './Search.module.scss';
import { getProductBySearch }from '../../redux/product/product-operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = () => {
        try{
            navigate(`/products?search=${search}`);
            dispatch(getProductBySearch(search))
                .then(response => console.log(response.payload.data));
            setSearch("");
        }
        catch(error){
            console.log(error);
        }
    };

    return (
        <div className={scss.container}>
            <input
               value={search}
               onChange={handleSearch}
            />
        <button type='button' onClick={handleSubmit}>Пошук</button>
        </div>
    )
  };
  
export default Search;


