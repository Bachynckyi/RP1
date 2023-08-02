import { NavLink } from 'react-router-dom/dist';
import scss from './RegisterForm.module.scss';
import { useState, useCallback } from 'react';

const initialState = {
  email: "",
  password: "",
};

const RegisterForm = ({onSubmit}) => {
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
    <>
      <form className={scss.form} onSubmit={handleSubmit}>
      <h2 className={scss.h}>Реєстрація</h2>
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
        <p className={scss.pp}>Реєстрація</p>
      </button>
      <NavLink className={scss.p} to="/login">
        Є аккаунт? Вхід
      </NavLink>
    </form>
    </>
  );
};

export default RegisterForm;