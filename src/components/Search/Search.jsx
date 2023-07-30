import scss from './Search.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BsFillBasketFill } from "react-icons/bs";
import iconSearch from '../../images/search.svg';

const Search = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = () => {
        navigate(`/products?search=${search}`);
    };

    return (
        <div className={scss.container}>
            <div className={scss.container}>
                <input
                className={scss.input}
                value={search}
                onChange={handleSearch}
                placeholder='Введіть пошуковий запит'
                />
            <button type='button' onClick={handleSubmit} className={scss.button}>
                <img src={iconSearch} alt="iconSearch" />
            </button>
            </div>
            <NavLink to="/order">
                <BsFillBasketFill className={scss.basketIcon}/>
            </NavLink>
        </div>
    )
  };
  
export default Search;


