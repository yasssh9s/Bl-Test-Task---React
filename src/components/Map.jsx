
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'; 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

// importing chartjs and react-leaflet for creating donut and maps
const App = () => {
  // Setting States
  const [worldData, setWorldData] = useState(null);
  const [globalStats, setGlobalStats] = useState({
    deaths: 0,
    recovered: 0,
    active: 0,
    cases: 0
  });

  useEffect(() => {
    // Fetch global data from API
    axios.get('https://disease.sh/v3/covid-19/countries')
      .then(response => {
        const data = response.data;
        setWorldData(data);

        // Aggregate global statistics
        let totalDeaths = 0, totalRecovered = 0, totalActive = 0, totalCases = 0;
        data.forEach(country => {
          totalDeaths += country.deaths;
          totalRecovered += country.recovered;
          totalActive += country.active;
          totalCases += country.cases;
        });
        // Assign global stats
        setGlobalStats({
          deaths: totalDeaths,
          recovered: totalRecovered,
          active: totalActive,
          cases: totalCases
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!worldData) return <div>Loading...</div>;

  // Creating donut
  const donutData = {
    labels: ['Deaths', 'Recovered', 'Active'],
    datasets: [
      {
        data: [globalStats.deaths, globalStats.recovered, globalStats.active],
        backgroundColor: ['red', '#36A2EB', 'limegreen'],
        hoverBackgroundColor: ['red', '#36A2EB', 'limegreen'],
      },
    ],
  };

  const topCountries = worldData.slice(0, 7);

  return (
    <div className="dashboard">
      
      <div className="country-list">
      <h2>World Map</h2>
        <ul>
          {topCountries.map((country, index) => (
            <li key={index}>
            {country.cases.toLocaleString()} : {country.country}
            </li>
          ))}
        </ul>
      </div>

      <div className="statistics">
        <Doughnut data={donutData} />
        <div className="total-cases">
          <h3>Global</h3>
          <h4 className='c'>Total Cases: {globalStats.cases}</h4>
          <h4 className='r'>Deaths : {globalStats.deaths}</h4>
          <h4 className='g'>Recovered : {globalStats.recovered}</h4>
        </div>
      </div>

          {/* Adding Map here I have used Chatgpt to learn about react-leaflet and maps */}
      <div className="map">
        <MapContainer center={[20, 0]} zoom={2} style={{ height: '400px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {worldData.map((country, index) => (
            <CircleMarker
              key={index}
              center={[country.countryInfo.lat, country.countryInfo.long]}
              radius={Math.log(country.cases) * 2}
              fillOpacity={0.5}
              stroke={false}
              color="red"
            >
              <Popup>
                <div>
                  <strong>{country.country}</strong>
                  <p>Cases: {country.cases}</p>
                  <p>Deaths: {country.deaths}</p>
                  <p>Recovered: {country.recovered}</p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default App;
