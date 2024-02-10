import React from 'react';
import '../app.css';

function Location({weatherData, country}){
    const dateBuilder = (d) => {
        let months = ["January","February","March","April","May","June"
        ,"July","August","September","October","November","December"];
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return ` ${day} ${date} ${month},${year}`; 
    }
    return (
        <>
            <div className='location'>
                {`${weatherData}, ${country}`}
            </div>
            <div className='date'>
                {dateBuilder(new Date())}
            </div>
        </>
    );
}

export default Location;