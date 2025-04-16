import React, { useEffect, useState } from 'react';
import './WeatherCard.css';

const cities = ['New York', 'London', 'Tokyo'];
const API_KEY = 'a8068003389d879e476c3780ccc202b3'; // Replace with your actual OpenWeatherMap API key

function WeatherCard() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const results = await Promise.all(
        cities.map(async (city) => {
          try {
            const res = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            const data = await res.json();
            return {
              name: data.name,
              temp: data.main.temp,
              condition: data.weather[0].description,
            };
          } catch (err) {
            console.error(`Error fetching weather for ${city}`, err);
            return { name: city, temp: 'N/A', condition: 'Error fetching data' };
          }
        })
      );
      setWeatherData(results);
    };

    fetchWeather();
  }, []);

  const getIcon = (desc) => {
    if (desc.toLowerCase().includes('cloud')) return '☁️';
    if (desc.toLowerCase().includes('rain')) return '🌧️';
    if (desc.toLowerCase().includes('sun') || desc.toLowerCase().includes('clear')) return '☀️';
    return '🌡️';
  };

  return (
    <div className='cont'>
      {weatherData.map((cityData, index) => (
        <div key={index} className="container">
          <h1>{cityData.name}</h1>
          <p>{cityData.temp}°C</p>
          <p>{getIcon(cityData.condition)} {cityData.condition}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherCard;
