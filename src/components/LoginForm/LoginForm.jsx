
import { NavLink } from 'react-router-dom';
import scss from './LoginForm.module.scss';

export const LoginForm = () => {
  return (
    <form className={scss.form}>
      <h2 className={scss.h}>Авторизація</h2>
      <div className={scss.wrapper}>
        <input
          className={scss.input}
        />
        <input
          className={scss.input}
        />
      </div>
      <button className={scss.button} type="submit">
        <p className={scss.pp}>Вхід</p>
      </button>

      <NavLink className={scss.p} to="/register">
        Немає аккаунта? Регістрація
      </NavLink>
    </form>
  );
};

export default LoginForm;