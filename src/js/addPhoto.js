import '../css/imgDropPage.css';
import Dropzone from 'dropzone';
import dropzone from '../../node_modules/dropzone/dist/min/dropzone.min.css';
// import { brotliDecompressSync } from 'zlib';

export default function() {
  if (!document.querySelector('#drop-zone')) return;
  const KEY = localStorage.getItem('token');
  if (!KEY) window.location('/');
  Dropzone.autoDiscover = false;

  const form = document.querySelector('.dropzone');

  const myDropzone = new Dropzone(form, {
    url: 'https://venify.herokuapp.com/user/photos/upload',
    headers: {
      authorization: KEY,
    },
    paramName: 'file', // The name that will be used to transfer the file
    maxFilesize: 2,
    maxFiles: 2,
  });
  // localStorage.getItem('token')
  myDropzone.on('complete', function(file) {
    if (this.files.length === 2) {
      window.location.replace('/map-page.html');
    }
  });
}
