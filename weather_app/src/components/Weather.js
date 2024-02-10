import React from 'react';
import '../app.css';

function Weather({weatherData, tempreature}){
    const tempInCelsius = tempreature - 273.15;
    let weather = weatherData[0]?.main ? weatherData[0]?.main : 'No Data!'
    return (
        <>
            <div className='temp'>
                {`${Math.round(tempInCelsius.toFixed(2))}°C`}
            </div>
            <div className='weather-text'>
                {weather}
            </div>
        </>
    );
}

export default Weather;