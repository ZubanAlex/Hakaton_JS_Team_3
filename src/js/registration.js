import axios from 'axios';
import '../../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js';

export default function() {
  if (!document.querySelector('#registration-page')) return;
  const refs = {
    password: document.querySelector('.registration_userPass-input'),
    login: document.querySelector('.registration_userLogin-input'),
    name: document.querySelector('.registration_userName-input'),
    age: document.querySelector('.registration_userAge-input'),
    phoneNumber: document.querySelector('.registration_userPhone-input'),
    gender: document.querySelector('.registration_userSexMale-input'),
  };

  const registration = document.querySelector('.registration_btn');

  const coords = [];
  const getGeoLocation = location => {
    coords[0] = location.coords.latitude;
    coords[1] = location.coords.longitude;
    return coords;
  };

  navigator.geolocation.getCurrentPosition(getGeoLocation);

  registration.addEventListener('click', async event => {
    event.preventDefault();

    if (
      refs.password.value === '' ||
      refs.login.value === '' ||
      refs.age.value === '' ||
      refs.phoneNumber.value === '' ||
      refs.name.value === '' ||
      refs.gender.value === ''
    ) {
      PNotify.error('Fill in all the fields');
    } else {
      const registrationPost = await axios.post(
        'https://venify.herokuapp.com/user/register',
        {
          password: refs.password.value,
          login: refs.login.value,
          age: refs.age.value,
          name: refs.name.value,
          phone_number: refs.phoneNumber.value,
          geo_location: coords,
          gender: refs.gender.value,
        },
      );

      localStorage.setItem('token', registrationPost.data.token);
      window.location.replace('/drope-image-page.html');
      // console.log(registrationPost);
    }
  });

  // Login

  const login = document.querySelector('.registration_userLogin-input');
  const loginError = document.querySelector('.spanL');

  login.addEventListener('blur', e => {
    if (login.value.length) {
      return;
    } else {
      login.classList.add('invalid');
      loginError.classList.add('error');
    }
  });

  login.addEventListener('focus', e => {
    if (login.value.length) {
      return;
    } else {
      login.classList.remove('invalid');
      loginError.classList.remove('error');
    }
  });

  // Name

  const name = document.querySelector('.registration_userName-input');
  const nameError = document.querySelector('.spanN');

  name.addEventListener('blur', e => {
    if (name.value.length) {
      return;
    } else {
      name.classList.add('invalid');
      nameError.classList.add('error');
    }
  });

  name.addEventListener('focus', e => {
    if (name.value.length) {
      return;
    } else {
      name.classList.remove('invalid');
      nameError.classList.remove('error');
    }
  });

  // AGE

  const age = document.querySelector('.registration_userAge-input');
  const ageError = document.querySelector('.spanA');

  age.addEventListener('blur', e => {
    if (!isNaN(age.value)) {
      return;
    } else {
      age.classList.add('invalid');
      ageError.classList.add('error');
    }
  });

  age.addEventListener('blur', e => {
    if (isNaN(age.value)) {
      return;
    } else {
      age.classList.remove('invalid');
      ageError.classList.remove('error');
    }
  });

  const phone = document.querySelector('.registration_userPhone-input');
  const phoneError = document.querySelector('.spanP');

  phone.addEventListener('blur', e => {
    if (!isNaN(phone.value)) {
      return;
    } else {
      phone.classList.add('invalid');
      phoneError.classList.add('error');
    }
  });

  phone.addEventListener('blur', e => {
    if (isNaN(phone.value)) {
      return;
    } else {
      phone.classList.remove('invalid');
      phoneError.classList.remove('error');
    }
  });

  const password = document.querySelector('.registration_userPass-input');
  const passwordError = document.querySelector('.spanPa');

  password.addEventListener('blur', e => {
    if (password.value.length > 8) {
      return;
    } else {
      password.classList.add('invalid');
      passwordError.classList.add('error');
    }
  });

  const goToLogin = document.querySelector('.registration_loginLink-txt');

  goToLogin.addEventListener('click', function() {
    window.location.replace('/');
  });

  password.addEventListener('blur', e => {
    if (password.value.length < 8) {
      return;
    } else {
      password.classList.remove('invalid');
      passwordError.classList.remove('error');
    }
  });
}
