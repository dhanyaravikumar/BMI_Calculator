import React from 'react'
import carimage from '../assets/image.jpg'

function Car() {
    const car = {
        name : "WangonR",
        color : "Red",
        model : "LX2016",
        pic:carimage
    }
  return (
    <div>
        <h3>Car Details</h3>
        <img src={car.pic} alt="carimage" height="70px" width="160px"/>
        <p>car name : {car.name}</p>
        <p>car color : {car.color}</p>
        <p>car model : {car.model}</p>
    </div>
  )
}

export default Car