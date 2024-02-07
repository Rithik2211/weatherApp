import React from 'react';
import CustomText from './components/CustomText';
import Card from './components/Card';
import './app.css';
import images from './assests/image';

const api = {
  key : "95857f0aaaf95971f1f5a45d979f512c",
  api : "https://api.openweathermap.org.data/2.5/"
}

function App() {
  return (
    <div className='app'>
      <div className='weather'>
        <div className='search-bar'>
          <input className='search-text' placeholder='Enter Your Location...' type='text'/>
          <img  className='search-img' src={images.search} alt='search'/>
        </div>
        <div className='text-bar'>
          <CustomText/>
        </div>
        <div className='card'>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
