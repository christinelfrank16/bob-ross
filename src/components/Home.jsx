import React from 'react';
import Bobross from '../assest/images/Bobross.jpg';
import rossSignature from '../assest/images/rossSignature.png';
import backgroundImage from '../assest/images/Background.jpg';

function Home(){
    
  var homeStyling ={
    textAlign:'center',
    fontFamily:'Permanent Marker, cursive',
    backgroundImage:`url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'white',
    fontWeight: 'bold'
  };
  var imageStyle = {
    borderRadius: '8px', 
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      
        
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