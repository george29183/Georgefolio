import React, { useState, useEffect } from 'react';
import Day from '../components/MeteoconsClearDay'
import Night from '../components/LineMdSunnyOutlineToMoonLoopTransition'
import Precipitation from '../components/MeteoconsRaindropFill'
import Wind from '../components/MeteoconsWindFill'


const WeatherApp = (props) => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current=temperature_2m,is_day,precipitation,rain,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,visibility,wind_speed_10m,wind_direction_10m&daily=temperature_2m_max,temperature_2m_min&wind_speed_unit=mph&timezone=GMT'
      );
      const data = await response.json();
       console.log(data);
      // Process data here if needed
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []); // Fetch data when the component mounts

  return (
    <div className={props.className}>
      <h1>London</h1>
      {weatherData && (
        <div className='flex justify-center flex-col sm:flex-row items-center gap-2'>
          {/* Display weather data here */}
          <div>
           {weatherData.current.temperature_2m}°C
          </div>
          <div>
           {weatherData.current.is_day?<Day/>:<Night/>}
          </div>
          <div className='flex'>
           <Precipitation/>{weatherData.current.precipitation+'%'}
          </div>
          <div className='flex'>
           <Wind/>{weatherData.current.wind_speed_10m} mph
          </div> 
          {/* Add more fields as needed */}
        </div>
      )}
   
    </div>
  );
};

export default WeatherApp;
