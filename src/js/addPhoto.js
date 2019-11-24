import '../css/imgDropPage.css'
import Dropzone from 'dropzone';
import dropzone from '../../node_modules/dropzone/dist/min/dropzone.min.css';
// import { brotliDecompressSync } from 'zlib';

Dropzone.autoDiscover = false;


  const form = document.querySelector('.dropzone');

  const myDropzone = new Dropzone(form, { 
    url: "https://venify.herokuapp.com/user/photos/upload",
    headers: {
      authorization: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiI1NTU2NjIiLCJhZ2UiOjE1LCJpYXQiOjE1NzQ1MTk3Mzh9.0G84wB4wfKyAKlHKOpDrp8vwBGtKK_uq4AnEtx8B3SUCqxDVa6PN-v60ykK8i0LnJCjzUB69fxLGAr9xW7oOhg',
    },
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 2,
    maxFiles: 2,
  }
);
// localStorage.getItem('token')
myDropzone.on("complete", function (file) {
  if (this.files.length === 2 ) {
    console.log(this.files);
  }
});