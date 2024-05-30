import React, { useEffect, useState } from "react";
import axios from "axios";
import './Cards.css'
import CovidBarChart from "./CovidBarChart";
import Live from "./Live"
import Map from "./Map";
import Box from "./Box";

function Cards() {

    const [data, setData] = useState(null);
  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://data.covid19india.org/v4/min/data.min.json")
      .then((response) => {
        console.log(response.data); // Log the data to inspect its structure
        if (response.data) {
          setData(response.data.TT);
        }
      })  //Catching Error while fetching data
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

//   Check for data
  if (!data) return <div>Loading...</div>;

  // destructuring the data and assigning it to the variables
  const totalCases = data?.total?.confirmed || 0;
  const totalDeaths = data?.total?.deceased || 0;
  const totalRecovered = data?.total?.recovered || 0;

  return <div className="main">
     <div className="">
     <div className="cards ">
        <div className="card c">
          <div className="card-header">
          <h3>Cases</h3>
          <h3 className="card-percentage">23% ↑</h3>
          </div>
          <h1>{totalCases}</h1>
        </div>
        <div className="card r">
        <div className="card-header">
          <h3>Deaths</h3>
          <h3 className="card-percentage">19% ↑</h3>
          </div>
          <h1>{totalDeaths}</h1>
        </div>
        <div className="card g">
        <div className="card-header">
          <h3>Recovered</h3>
          <h3 className="card-percentage">15% ↑</h3>
          </div>
          <h1>{totalRecovered}</h1>
        </div>
      </div>
      <CovidBarChart/>
        <Map/>
     </div>
     <div>
        <Live/>
        <Box/>
     </div>

  </div>;
}

export default Cards;
