import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './CovidBarChart.css'
import axios from 'axios';
// Importing tools form chat.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CovidBarChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Fetching data from API
        const response = await axios.get('https://data.covid19india.org/v4/min/data.min.json');
        const data = response.data;

        // Assigning and destructuring the data
        const states = Object.keys(data);
        const cases = states.map(state => data[state]?.total?.confirmed || 0);
        const recovered = states.map(state => data[state]?.total?.recovered || 0);
        const deaths = states.map(state => data[state]?.total?.deceased || 0);

        // Structuring the chart layout , here I have used Chat-Gpt to build the chart

        setChartData({
          labels: states,
        //   assigning the values to the datasets for the bars
          datasets: [
            {
              label: 'Confirmed Cases',
              data: cases,
              backgroundColor: 'skyblue',
            },
            {
              label: 'Recovered',
              data: recovered,
              backgroundColor: 'lightgreen',
            },
            {
              label: 'Deaths',
              data: deaths,
              backgroundColor: 'red',
            },
          ],
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

//   Assigning the data  value to the chrat layout
  return (
    <div className='chart'>
      <h2>Covid-19 Statistics</h2>
      <p>as of 05 April 2020, 09:41 PM</p>
      <Bar
        data={chartData}
        options={{
          scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true },
          },
        }}
      />
    </div>
  );
};

export default CovidBarChart;
