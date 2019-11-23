import '../css/map.css';
import initMap from './initMap';
import createMapUserList from './renderMapUserList';
import getUserForMap from './getUsersForMap';

const KEY =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiJ1c2VyVGVsLnZhbHVlIiwiYWdlIjoidXNlckFnZS52YWx1ZSIsImlhdCI6MTU3NDUyNDMyMH0.CJcAiSm1lbnAwTOipBt-0KJI8ZPREWdRwRotDraRnoVYCPi3DVNhwXhhZDag36iV0cds7K5GnGheoCGf4sPLzQ';

export default async function openMap() {
  let data = await getUserForMap(KEY);
  initMap();
  createMapUserList(data);
  console.log(data);
}
