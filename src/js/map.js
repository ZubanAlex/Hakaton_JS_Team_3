import '../css/map.css';
import '../css/footer.css';
import '../css/header.css';
import initMap from './initMap';
import createMapUserList from './renderMapUserList';
import getUserForMap from './getUsersForMap';

const KEY =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiIyMzQ1Njc4IiwiYWdlIjoiMzMiLCJpYXQiOjE1NzQ1MzQ3MDl9.GEMn6_3wglzv6a5uqjuKqsqMS3aQYlfdOclONkxdmTKkqttTX1KPqZB1hPcIr1dblie_555RlydDYYgaeBaZeg';

export default async function openMap() {
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
