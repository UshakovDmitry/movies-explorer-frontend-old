import './Profile.css';
import Field from '../Field/Field';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  return (
    <>
      <Header loggedIn={true} place="account" />
      <form className="profile page__element">
        <h2 className="profile__title">Привет, Дмитрий!</h2>
        <Field
          name="name"
          type="text"
          label="Имя"
          labelStyle="profile__label"
          inputStyle="profile__input"
          value="Дмитрий"
          errtext="Что-то пошло не так..."
          errorStyle="profile__error"
        />
        <Field
          name="Email"
          type="email"
          label="E-mail"
          labelStyle="profile__label"
          inputStyle="profile__input"
          value="yandex@ya.ru"
          errorStyle="profile__error"
        />

        <div className="profile__submit-area">
          <p className="profile__submit-error">При обновлении профиля произошла ошибка.</p>
          <button
            className={`profile__submit-button ${
              props.disabled && 'profile__submit-button_disabled'
            }`}
            type="submit"
            aria-label="Редактировать"
          >
            Редактировать
          </button>
          <Link to={'/'} className="profile__link" aria-label="Выйти из аккаунта">
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </>
  );
};

export default Profile;