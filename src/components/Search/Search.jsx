import scss from './Search.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {BsSearch} from "react-icons/bs";

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
                <BsSearch className={scss.icon_search}/>
            </button>
            </div>
        </div>
    )
  };
  
export default Search;


