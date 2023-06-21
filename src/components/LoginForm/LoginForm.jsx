import { NavLink } from 'react-router-dom';
import scss from './LoginForm.module.scss';
import { useState, useCallback } from 'react';

const initialState = {
  email: "",
  password: "",
};

export const LoginForm = ({onSubmit}) => {
  const [state, setState] = useState({ ...initialState });
  const { email, password } = state;

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ ...state });
    setState(initialState)
  };

  const handleChange = useCallback(({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );


  return (
    <form className={scss.form} onSubmit={handleSubmit}>
      <h2 className={scss.h}>Авторизація</h2>
      <div className={scss.wrapper}>
        <input
          className={scss.input}
          name='email'
          value={email}
          required
          placeholder='Введіть адресу електронної пошти'
          onChange={handleChange}
        />
        <input
          className={scss.input}
          name='password'
          value={password}
          required
          placeholder='Введіть пароль'
          onChange={handleChange}
        />
      </div>
      <button className={scss.button} type="submit">
        <p className={scss.pp}>Вхід</p>
      </button>

      <NavLink className={scss.p} to="/register">
        Немає аккаунта? Реєстрація
      </NavLink>
    </form>
  );
};

export default LoginForm;