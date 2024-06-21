import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({ data }) => {
  const formattedData = data.map((item) => ({
    name: item.dt_txt,
    temperature: item.main.temp,
  }));

  return (
    <LineChart width={600} height={300} data={formattedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
    </LineChart>
  );
};

export default Chart;
