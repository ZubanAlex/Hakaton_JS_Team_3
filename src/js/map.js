import '../css/map.css';
import '../css/footer.css';
import '../css/header.css';
import initMap from './initMap';
import createMapUserList from './renderMapUserList';
import getUserForMap from './getUsersForMap';

const KEY = localStorage.getItem('token');
if (!KEY) window.location('/');

export default async function openMap() {
  if (!document.querySelector('#map-page')) return;

  let data = await getUserForMap(KEY);
  let geoLocation = data.map(key => key.geo_location);

  const userList = document.querySelector('.mapUsers_list');

  const getDataAttr = function(event) {
    if (event.target.getAttribute('data-location')) {
      initMap(
        geoLocation,
        event.target.getAttribute('data-location').split(','),
      );
    }
  };

  userList.addEventListener('click', getDataAttr);

  initMap(geoLocation);
  createMapUserList(data);
  // console.log(data);
}
