import React from 'react'
import {useState} from 'react'
function UserReg() {

    const[user,setUser] = useState({
        firstname:"",
        lastname:"",
        email:"",
        dateofbirth:"",
        phone:"",
        courses:"",
        courseDuration:""
    })

    const[submitbtn,setSubmitbtn] = useState(false);
    const handlesubmit=(e)=>{
        e.preventDefault();
        setSubmitbtn(user);
    }
  return (
    <div>
        <h2>ONLINE COURSE REGISTRATION FORM</h2>
        <form onSubmit={handlesubmit}>
            <table>
                <tr>
                <th><label>First Name:</label></th>
                <th><label>Last Name:</label></th>
                </tr>

                <tr>
                    <td><input type="text" placeholder='enter your first name' value={user.firstname} onChange={(e)=>(setUser({...user,firstname:e.target.value}))}/></td>
                    <td><input type="text" placeholder='enter your last name' value={user.lastname} onChange={(e)=>(setUser({...user,lastname:e.target.value}))}/></td>
                </tr>
            </table>

            <label>Email:</label><br/>
            <input type="email" placeholder="Email Address" value={user.email} onChange={(e)=>(setUser({...user,email:e.target.value}))}/><br/>
            <label>Date Of Birth:</label><br/>
            <input type ="date" placeholder="dd-mm-yyyy" value={user.dateofbirth} onChange={(e)=>setUser({...user,dateofbirth:e.target.value})}/><br/>
            <label>Phone/Mobile</label><br/>
            <input type="text" placeholder="Mobile Number" value={user.phone} onChange={(e)=>setUser({...user,phone:e.target.value})}/><br/>
            <label>Choose the course you want to enroll in</label><br/>
            <select value={user.courses} onChange={(e)=>setUser({...user,courses:e.target.value})}>
                <option value="">--select</option>
                <option value="Artifiacal Intelligence">Artificial Intelligence</option>
                <option value="Data Science">Data Science</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
            </select><br/>
            <label>Preferred Course Duration</label><br/>
            <table className="duartion-table">
                <tr>
                    <td align="left"><input type="radio" name="duration" value="6 months" onChange={(e)=>setUser({...user,courseDuration:e.target.value})}/>6 months</td>
                    <td> <input type="radio" name="duration" value="12 months" onChange={(e)=>setUser({...user,courseDuration:e.target.value})} />12 months<br/></td>
                </tr>
            </table>
           
            <button type="submit">Apply To Enroll</button>
        </form>
        {submitbtn && (
            <div className="registered-details">
                <h2>REGISTERED DETAILS</h2>
                <p>First Name : {submitbtn.firstname}</p>
                <p>Last Name : {submitbtn.lastname}</p>
                <p>Email : {submitbtn.email}</p>
                <p>Date Of Birth : {submitbtn.dateofbirth}</p>
                <p>Phone Number : {submitbtn.phone}</p>
                <p>Course : {submitbtn.courses}</p>
                <p>Course Duration : {submitbtn.courseDuration}</p>
            </div>
        )}
    </div>

  )
}

export default UserReg