import React from 'react'
import './Live.css'
function Live() {
  return (
    <div className="live" >
        <div className='live-title'>
        <h1>Live Updates </h1>
        <span>1 min ago</span>
        </div>
        <div className="list-item">
        <div className="circle" ></div>
        <h4>2 new cases in India</h4>

        </div>
        <div className="list-item">
        <div className="circle" ></div>
        <h4> 4 new cases in Singapore</h4>

        </div>
        <div className="list-item">
        <div className="circle" ></div>
        <h4> 1 new cases in Thailand</h4>
        </div>
        <div className="list-item">
        <div className="circle" ></div>
        <h4> 5 new cases in Taiwan</h4>
        </div>
        <div className="list-item">
        <div className="circle" ></div>
        <h4> 8 new cases in Japan</h4>
        </div>
        <div className="list-item">
        <div className="circle" ></div>
        <h4> 1 new cases in Brazil</h4>
        </div>
        <div className="list-item">
        <div className="rcircle" ></div>
        <h4> 1st case in Ecudar</h4>
        </div>
        <div className="list-item">
        <div className="rcircle" ></div>
        <h4> 1st case in Mexico</h4>
        </div>
      </div>
  )
}

export default Live