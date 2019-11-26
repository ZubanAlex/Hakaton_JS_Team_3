export default function() {
  if (!document.querySelector('#header')) return;
  const logo = document.querySelector('.logo');
  const menuLike = document.querySelector('.menuLike');
  const menuContact = document.querySelector('.menuContact');
  const logOut = document.querySelector('.logOut');

  logo.addEventListener('click', function() {
    window.location.replace('./slider.html');
  });

  menuLike.addEventListener('click', function() {
    window.location.replace('./slider.html');
  });

  menuContact.addEventListener('click', function() {
    window.location.replace('./map-page.html');
  });

  logOut.addEventListener('click', function() {
    window.location.replace('./index.html');
  });
}
