import React, { useState } from 'react'


function BmiApp() {
const [height, setHeight]  = useState(0);
const [weight, setWeight]  = useState(0);   
const [bmi, setBmi]  = useState(0);

function bmiCalculation(event) {
event.preventDefault();
const formValid = height > 0 &&  weight > 0;
if(!formValid) {
    return;
}
const bmi = Math.floor((  weight / ((height) / 100) ** 2));
setBmi(bmi)
}

    return (
        <> 
        <h2>BMI Calculation App</h2>
        <h3> Your height is {height} and weight is {weight} and BMI is {bmi}</h3>
        <div>
        <form  onSubmit={bmiCalculation}>
       <label> Enter your height in cm: 
           <br/> <input type="number"
            placeholder="Enter Your Height"
             onChange={(event)=> setHeight(event.target.value)}
             value={height}
            />
            </label> <br /><br/>
            
            <label>Enter your weight in Kg:
             <br/><input type="number" 
               placeholder="Enter Your Height"
               onChange={(event)=>setWeight(event.target.value)}
               value={weight}
             />
             </label>
             <button type='submit'>Calculate</button>
             </form>
             <h5 >BMI : {bmi}</h5>
             </div>
             
        </>
    )
}

export default BmiApp;