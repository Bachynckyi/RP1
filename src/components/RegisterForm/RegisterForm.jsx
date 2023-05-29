import { NavLink } from 'react-router-dom/dist';
import scss from './RegisterForm.module.scss';

const RegisterForm = () => {
  return (
    <>
      <form className={scss.form}>
      <h2 className={scss.h}>Регістрація</h2>
      <div className={scss.wrapper}>
        <input
          className={scss.input}
        />
        <input
          className={scss.input}
        />
      </div>
      <button className={scss.button} type="submit">
        <p className={scss.pp}>Регістрація</p>
      </button>
      <NavLink className={scss.p} to="/login">
        Є аккаунт? Вхід
      </NavLink>
    </form>
    </>
  );
};

export default RegisterForm;