export { arr };

export default function() {
  arr.inputName.addEventListener('input', validateInputLogin);
  arr.inputPassword.addEventListener('input', validateInputPassword);

  function validateInputLogin() {
    if (arr.inputName.value.length >= 5) {
      arr.inputName.classList.remove('form_inputname_invalid');
    } else {
      arr.inputName.classList.add('form_inputname_invalid');
    }
  }
  function validateInputPassword() {
    if (arr.inputPassword.value.length <= 5) {
      arr.inputPassword.classList.add('form_inputname_invalid');
    } else {
      arr.inputPassword.classList.remove('form_inputname_invalid');
    }
  }
}
const arr = {
  inputName: document.querySelector('.form_inputname'),
  inputPassword: document.querySelector('.form_inputpassword'),
};
