import scss from './Search.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
            <input
               value={search}
               onChange={handleSearch}
            />
        <button type='button' onClick={handleSubmit}>Пошук</button>
        </div>
    )
  };
  
export default Search;


