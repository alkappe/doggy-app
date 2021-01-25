import dogplaceholder from './dogplaceholder.jpg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

function App() {

  const [image, updateImage] = useState(dogplaceholder);

  const getDoggyImage = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      // handle success
      updateImage(response.data.message)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  return (
    <div className="doggy__card-container doggy__box">
      
      <div className="doggy__colored-wrapper">
        <div className="doggy__image-wrapper">
          <img className="doggy__image" src={image} alt=""/>
        </div>
        <button className="doggy__btn" onClick={getDoggyImage}>
        <h1 className="doggy__dogemojii">🐶</h1>
        <p className="doggy__generate">generate another dog</p>
      </button>
      </div>

    </div>
  );
}

export default App;

