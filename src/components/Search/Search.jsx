import { useState } from 'react';
import scss from './Search.module.scss';

const Search = () => {

    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value)
    };

    return (
        <div className={scss.container}>
            <input
               value={search}
               onChange={handleSearch}
            />
        <button type='submit'>Пошук</button>
        </div>
    )
  };
  
export default Search;


