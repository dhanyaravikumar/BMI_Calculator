import React from 'react'
import {useState} from 'react'

function Bmi() {
  const[weight,setWeight] = useState("");
  const[height,setHeight] = useState("");
  const[bmi,setBmi] = useState("");
  const[message,setMessage]  = useState("");
  const[image,setImage] = useState("");

  const calculateBMI = ()=>{
    if(!weight || !height){
      alert("Please enter valid weight and height");
      return;
    }
  

  const heightm = height/100;
  
  const bmiNumber = weight/(heightm*heightm);

  setBmi(bmiNumber.toFixed(2));

  if(bmiNumber < 18.5){
    setMessage("You are underweight");
    setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9R4MMnxlkVLzVeYLSP_R79YlpwiKs5Lx3w&s");
  }
  else if(bmiNumber >= 18.5 && bmiNumber < 24.9){
    setMessage("You are normal weight");
    setImage("data:image/jpeg;base64,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");
  }
  else if(bmiNumber >= 25 && bmiNumber < 29.9){
    setMessage("You are overweight");
    setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDn5k3Z0FF-YZP37ckCD4sYnW4Ki1Q4ojnQ&s");
  }
  else{
    setMessage("You are obese");
    setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGeKCMCHHIOVH9jNMB4G3m9Bzwa0P-N8q_Lw&s");
  }
  }
  const reset = ()=>{
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
    setImage("");
  }

  return (
    <div className='container'>
        <h1 style = {{color : 'blue'}}>BMI Calculator</h1>
        <input type = "number" placeholder = "Enter your weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <input type = "number" placeholder = "Enter your height (cm)" value={height} onChange={(e)=> setHeight(e.target.value)}/>
        <button onClick={calculateBMI}>Calculate BMI</button>

        {bmi && (
          <div className='result'>
            <h2>Your BMI is : {bmi}</h2>
            
            <h3>Message : {message}</h3>

            <img src={image} alt = "BMI Image" />
            <div>
            <button onClick={reset}>Reset</button>
            </div>
            </div>
            )}

    </div>
  )
}

export default Bmi