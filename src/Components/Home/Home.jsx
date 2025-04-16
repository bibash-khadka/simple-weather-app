import React, { useState } from 'react';
import Search from '../Search/Search';
import Result from '../Result/Result';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    if (!searchTerm) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=a8068003389d879e476c3780ccc202b3&units=metric`
      );
      const data = await res.json();

      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        setWeatherData(null); 
        alert('City not found!');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="home">
      <Search 
      searchTerm={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onSearch={handleSearch}
      />
      {weatherData && <Result weatherData={weatherData}/>}
      {error && <p style={{color: 'red',marginTop:'20px'}}>{error}</p>}
      
    </div>
  );
}

export default Home;

