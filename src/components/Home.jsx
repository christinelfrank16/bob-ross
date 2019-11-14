import React from 'react';
import Bobross from '../assest/images/Bobross.jpg';
import rossSignature from '../assest/images/rossSignature.png';
import backgroundImage from '../assest/images/Background.jpg';

function Home(){
    
    var homeStyling ={
        textAlign:"center",
        fontFamily:"lucida Console",
        backgroundImage:`url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
        fontWeight: 'bold'
    };
    var imageStyle = {
        boxShadow: '0 0 20px 20px inset'
    };
  return(
    <div style= {homeStyling}>
      <h1> Happy Cloud Art</h1>
      <img style={imageStyle} src= {Bobross}/>
      <h4>with</h4>
      <img src= {rossSignature}/>
    </div>
  );
}
export default Home;