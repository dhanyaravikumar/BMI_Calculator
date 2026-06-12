import React from 'react'

function Task() {
    const hour = new Date().getHours();
    const greeting = hour<12 ? "Good Morning!" : hour<17 ? "Good Afternoon!" : "Good Evening!" ;
    const employee={
        name : "James",
        EmployeeId : "WIPRO7839A2",
        Department : "Global IT Infrastructure"
    }
    const projects = ["Advanced Thread Protection (Wipro Security Operations)","Legacy Mainframe Optimization (Financial Services Client)","AI/ML for Predictive Maintainence(Industrial Client)","Data Privacy Compliance Audit"];
    const notices = "⚠️ Product Strategy Call @ 11:30am";
    const contact = {
        email : "james.wipro@wipro.com",
        phno : "9999999999"
    }
  return (
    <div style={{marginLeft:"50px",marginRight:"50px"}}>
        <h1>{greeting}</h1>
        <h1>Welcome to Wipro Dashboard.</h1>
        <div style={{border : "1px solid grey" , height : "200px" , width : "1000px" , borderRadius: "8px", textAlign : "left", padding:"10px" , margin:"10px"}}>
            <h3>Employee Profiles</h3>
            <p>Name : {employee.name}</p>
            <p>Employee ID : {employee.EmployeeId}</p>
            <p>Department : {employee.Department}</p>
        </div>
        <div style={{border : "1px solid grey" , height : "200px" , width : "1000px" , borderRadius: "8px" , textAlign : "left" , padding : "10px", margin:"10px"}}>
            <h3>Current Projects</h3>
            <ul>
                {projects.map((c,index)=>(<li key={index}> {c}</li>))}
            </ul>
        </div>
        <div style={{border : "1px solid grey" , height : "100px" , width : "1000px" , borderRadius: "8px",textAlign : "left" ,padding : "10px", margin:"10px"}}>
            <h3>Team Notices</h3>
            <p style = {{color : "red"}}>{notices}</p>
        </div>
        <p>Contact:{contact.email}|| +91-{contact.phno}</p>
        <p>Wipro Technology || Wipro Ltd. Global  Operations</p>
    </div>
  )
}

export default Task