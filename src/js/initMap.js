import StyleSettings from './mapStyleSettings.json';

export default function initMap(locationArray, centr = [55.5555, 65.55555]) {
  let mapStyleSettings = StyleSettings;
  let options = {
    center: { lat: +centr[0], lng: +centr[1] },
    zoom: 5,
    styles: mapStyleSettings,
    disableDefaultUI: true,
  };

  let map = new google.maps.Map(document.getElementById('map'), options);
  locationArray.map(key => {
    if (Array.isArray(key)) {
      let marker = new google.maps.Marker({
        position: { lat: key[0], lng: key[1] },
        map: map,
      });
    }
  });
}
