import './Register.css';
import { ROUTE_SIGN_IN } from '../../utils/constants';
import Field from '../Field/Field';
import AuthForm from '../AuthForm/AuthForm';

const Register = () => {
  return (
    <AuthForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      captionText="Уже зарегистрированы?"
      route={ROUTE_SIGN_IN}
      linkText="Войти"
      disabled={true}
    >
      <Field
        inputStyle="form__input"
        name="name"
        type="text"
        label="Имя"
        labelStyle="form__label"
        value="Дмитрий"
        errorStyle="form__error"
        required={true}
      />
      <Field
        inputStyle="form__input"
        name="Email"
        type="email"
        label="E-mail"
        labelStyle="form__label"
        value="yandex@ya.ru"
        errorStyle="form__error"
        required={true}
      />
      <Field
        inputStyle="form__input"
        name="password"
        type="password"
        label="Пароль"
        labelStyle="form__label"
        onError={true}
        errtext="Что-то пошло не так..."
        value="qwerty12345678"
        errorStyle="form__error"
        required={true}
      />
    </AuthForm>
  );
};

export default Register;