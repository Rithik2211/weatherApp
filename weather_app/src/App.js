import React, { useEffect, useState } from 'react';
import Location from './components/Location';
import Weather from './components/Weather';
import './app.css';
import images from './assests/image';

const api = {
  key : "95857f0aaaf95971f1f5a45d979f512c",
  base : "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery]=  useState('');
  const [weatherData, setWeatherData]=  useState({});

  useEffect(()=>{
    setQuery('');
    setWeatherData({});
  },[])


  const handleSearch = () => {
    fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setQuery('');
        setWeatherData(result);
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  }

  return (
    <div className='app'>
      {
        weatherData ? 
        <div className='weather'>
        <div className='search-bar'>
          <input className='search-text' onChange={(e) => setQuery(e.target.value)} value={query} placeholder='Enter Your Location...' type='text'/>
          <img  className='search-img' onClick={handleSearch} src={images.search} alt='search'/>
        </div>
        <div className='location-box'>
          <Location 
          weatherData={weatherData?.name ? weatherData?.name : 'No Location Found!'} 
          country={weatherData?.sys?.country ? weatherData?.sys?.country : ''}
          />
        </div>
        <div className='weather-box'>
          <Weather 
          weatherData={weatherData?.weather ? weatherData?.weather : []}
          tempreature={weatherData?.main?.temp ? weatherData?.main?.temp : '0'}
          />
        </div>
      </div> : <div> No Data Found!!</div>
      }
    </div>
  );
}

export default App;
