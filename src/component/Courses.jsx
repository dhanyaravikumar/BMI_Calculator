import React from 'react'

function Courses() {
    const course=["Java","React","DS","WAD"]
  return (
    <div>
        <h3>List of Courses </h3>
        <ul>
            {course.map((c,index)=>(<li key={index}>{c}</li>))}
        </ul>
    </div>
  )
}

export default Courses