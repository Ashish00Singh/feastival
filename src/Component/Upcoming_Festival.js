import React from 'react'
import one from './ing/1.jpg'
import two from './ing/2.jpg'
import three from './ing/3.jpg'
import four from './ing/4.jpg'
import five from './ing/5.jpg'
import six from './ing/6.jpg'
import seven from './ing/7.jpg'
import eight from './ing/8.jpg'

export default function Upcoming_Festival() {
  return (
    <>
    <div className='d-flex flex-row justify-content-around'>
      <div className="card" style={{ width: "18rem" }}>
        <img src={one} className="card-img-top" alt="ola"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={two} className="card-img-top" alt="ola"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={two} className="card-img-top" alt="ola"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    </div>
    </>
  )
}
