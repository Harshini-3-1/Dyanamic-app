import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from './Chart';
import Table from './Table';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedCity, setSelectedCity] = useState('London');

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=YOUR_API_KEY`)
      .then(response => setWeatherData(response.data))
      .catch(error => console.error(error));
  }, [selectedCity]);

  return (
    <div>
      <div>
        <select onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="London">London</option>
          <option value="New York">New York</option>
          <option value="Tokyo">Tokyo</option>
        </select>
      </div>
      <Chart data={weatherData} />
      <Table data={weatherData} />
    </div>
  );
};

export default Dashboard;
