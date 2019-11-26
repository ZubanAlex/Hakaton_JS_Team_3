import '../css/slider.css';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import galleryItem from '../template/galleryItem.hbs';
import galleryItem1 from '../template/galleryItem1.hbs';
import { brotliDecompressSync } from 'zlib';
import axios from 'axios';

export default function() {
  if (!document.querySelector('#slider')) return;
  const swiper = new Swiper('.swiper-container2', {
    //   navigation: {
    //     nextEl: ‘.swiper-button-next’,
    //     prevEl: ‘.swiper-button-prev’,
    //   },
    //   pagination: {
    //     el: ‘.swiper-pagination’,
    //   },
    keyboard: true,
    speed: 900,
    //   spaceBetween: 100,
    //   delayBetweenSlides: 700,
    //   delay: 20000,
  });
  const swiper1 = new Swiper('.swiper-container1', {
    allowTouchMove: false,

    keyboard: true,
    //   speed: 5000,
    //   delay: 2000,
  });
  const button = document.querySelector('.scroll_btn_next');
  button.addEventListener('click', () => {
    swiper1.slideNext();
    swiper.slideNext();
  });
  swiper.controller.control = swiper1;
  // swiper1.controller.control = swiper;
  const ul = document.querySelector('.swiper-wrapper');
  const ul1 = document.querySelector('.swiper-wrapper1');
  const getListByName = async () => {
    const { data } = await axios(`https://venify.herokuapp.com/user/list`, {
      headers: {
        authorization:
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiIxMjMxMjMxMjMzIiwiYWdlIjoxOCwiaWF0IjoxNTc0NjE5NjU4fQ.ulT23UfI6PSGKc7gAMFQzgdm15afeueXkvNUGzloDEisHmYQ6s9N9iId04syerbhoHpULf-P5V4WBJ6eN5EJeA',
      },
    });
    return await data;
  };
  const createList = photoList => {
    return photoList.reduce((acc, photo) => {
      return acc + galleryItem(photo);
    }, '');
  };
  const createList1 = photoList => {
    return photoList.reduce((acc, photo) => {
      return acc + galleryItem1(photo);
    }, '');
  };
  const renderList = async () => {
    const data = await getListByName();
    ul.innerHTML = createList(data);
    ul1.innerHTML = createList1(data);
  };
  renderList();
}
