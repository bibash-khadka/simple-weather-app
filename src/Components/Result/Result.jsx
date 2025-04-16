import React from 'react'
import './Result.css'
function Result({weatherData}) {
    if (!weatherData || !weatherData.main || !weatherData.weather) {
        return null;
      }
      const getIcon = (desc) => {
        if (desc.toLowerCase().includes('cloud')) return '☁️';
        if (desc.toLowerCase().includes('rain')) return '🌧️';
        if (desc.toLowerCase().includes('sun') || desc.toLowerCase().includes('clear')) return '☀️';
        return '🌡️';
      };
      const condition = weatherData.weather[0].description;
  const icon = getIcon(condition);
  return (
    <div className='main'>
    <div className="result">
        <h3>{weatherData.name}</h3>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>{icon}Condition: {condition}</p>
    </div>
    </div>
  )
}

export default Result
