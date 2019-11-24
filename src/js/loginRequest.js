import '../css/login.css';
import { arr } from './login.js';
import axios from 'axios';
import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
import login from '../js/login.js';

export default function() {
  if (!document.querySelector('#login')) return;

  const form = document.querySelector('.form');
  let isDataLoading = false;
  form.addEventListener('submit', sendRequest);

  async function sendRequest(elem) {
    elem.preventDefault();
    if (
      arr.inputName.classList.contains('form_inputname_invalid') ||
      arr.inputPassword.classList.contains('form_inputpassword_invalid')
    ) {
      catchError();
      return;
    }

    if (isDataLoading) return;

    isDataLoading = true;

    const data = await axios
      .post('https://venify.herokuapp.com/user/login', {
        password: arr.inputPassword.value,
        login: arr.inputName.value,
      })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        window.location.replace('./map-page.html');
      })
      .catch(error => {
        catchError();
      })
      .finally(() => {
        isDataLoading = false;
      });
  }

  function catchError() {
    PNotify.error({
      title: 'Oh No!',
      text: 'No matches found. Please enter a more specific request.',
    });
  }

  login();
}
