import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Temperature</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.dt_txt}</td>
            <td>{item.main.temp}</td>
            <td>{item.main.humidity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
