import StyleSettings from './mapStyleSettings.json';

export default function initMap() {
  let mapStyleSettings = StyleSettings;
  let options = {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    styles: mapStyleSettings,
    disableDefaultUI: true,
  };
  let map = new google.maps.Map(document.getElementById('map'), options);
}
