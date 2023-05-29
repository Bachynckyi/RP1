import scss from './Search.module.scss';

const Search = () => {
  return (
    <>
      <div className={scss.header}>
        <form action="" className={scss.form}>
          <input
            name="search"
            type="search"
            className={scss.input}
            placeholder="Search"
          />
          <button type="submit" className={scss.button}>
            <img alt="iconSearch" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;