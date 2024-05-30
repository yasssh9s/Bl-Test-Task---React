import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import './Box.css'
function Box() {
  return (
    <div className="box">
    <div className="img-container">
    <img  src="https://img.freepik.com/free-vector/coughing-person-concept_52683-36413.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708214400&semt=ais"/>
    </div>
    <div className="box-col">
    <h3>Symptoms</h3>
    <p>Read carefully 5 symptoms of Covid-19</p>
    <FaArrowRight/>
    </div>
  </div>
  )
}

export default Box