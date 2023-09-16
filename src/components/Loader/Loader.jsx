import { ThreeDots } from 'react-loader-spinner';
 
import css from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
      height="150" 
      width="150" 
      radius="9"
      color="orange" 
      ariaLabel="three-dots-loading"
      visible={true}
      />
    </div>
  );
};

export default Loader;