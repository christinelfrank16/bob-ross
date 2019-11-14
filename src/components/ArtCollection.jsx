import React from 'react';
import Carousel from './Carousel';
import backgroundImage from '../assest/images/Background.jpg';

function ArtCollection(){
  var collectionStyling ={
    textAlign:'center',
    fontFamily:'Permanent Marker, cursive',
    backgroundImage:`url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'white',
    fontWeight: 'bold'
  };
  return (
    <div style= {collectionStyling}>
      <h2>Welcome to The Collection!</h2>
      <Carousel/>
    </div>
  );
}

export default ArtCollection;