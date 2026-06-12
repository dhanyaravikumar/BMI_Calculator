import React from 'react'
import fruits from './fruit';

function Fruits() {
  return (
    <div>
        <div className='container'>
        <h3>Fruits Images</h3>
        <ul>
            {fruits.map((c,index)=>(<li key={index}> 
                <div className='photo'>
                <img src={c.pic} alt={c.name} height="100px" width="200px"/> 
                <p>Name : {c.name}</p> 
                <p>Color : {c.color}</p>
                </div>
                </li>))}
        </ul>
        </div>
    </div>
  )
}

export default Fruits