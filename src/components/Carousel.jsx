import React from 'react';
import CarouselItem from './CarouselItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';

import ross1 from '../assest/images/ross1.jpg';
import ross2 from '../assest/images/ross2.jpg';
import ross3 from '../assest/images/ross3.jpg';
import ross4 from '../assest/images/ross4.jpg';
import ross5 from '../assest/images/ross5.jpg';
import ross6 from '../assest/images/ross6.jpg';
import ross7 from '../assest/images/ross7.jpg';
import ross8 from '../assest/images/ross8.jpg';
import ross9 from '../assest/images/ross9.jpg';
import ross10 from '../assest/images/ross10.jpg';
import ross11 from '../assest/images/ross11.jpg';


function Carousel() {
  var items = [
    {
      src: ross2,
      img: 'Dark Waterfall with happy mist'
    },
    {
      src: ross3,
      img: 'Waterfall with happy leaves'
    },
    {
      src: ross4,
      img: 'Bright Lake Mountian with happy clouds'
    },
    {
      src: ross5,
      img: 'Autumn Mountian with happy waves'
    },
    {
      src: ross6,
      img: 'Dark Cabin View with happy mountian'
    },
    {
      src: ross7,
      img: 'Pink Sky Mountian with happy clouds'
    },
    {
      src: ross8,
      img: 'Creek View with happy bushes'
    },
    {
      src: ross9,
      img: 'Snowy Mountian with happy clouds'
    },
    {
      src: ross10,
      img: 'Mountian Waterfall with happy trees'
    },
    {
      src: ross11,
      img: 'Winter Tree with happy sky'
    }
  ];
  return(
    <div id="carouselArt" className="carousel slide" data-ride="carousel" data-wrap="true">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={ross1} alt='Dark Mountian with happy clouds'/>
        </div>
        {items.map((item, index) =>
          <CarouselItem img={item.src} alt={item.alt} key={index}/>    
        )}
      </div>
    </div>
  );
}

export default Carousel;