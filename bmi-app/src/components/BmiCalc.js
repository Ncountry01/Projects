import React, { Component } from 'react';


class BMICalculator extends Component {
    
    constructor () {
        super() 
        this.state = {
            heightFeet:"",
            heightInch:"",
            weight: '',
        }
        this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this);
        this.handleHeightInchChange = this.handleHeightInchChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this)
        this.calculateBMI = this.calculateBMI.bind(this)
    }

  handleHeightFeetChange(event) {
      this.setState({
          heightFeet:event.target.value
      });
  }  
handleHeightInchChange(event) {
    this.setState({
        heightInch:event.target.value
    })
}

handleWeightChange(event) {
    this.setState({
        weight:event.target.value
    })
}
calculateBMI() {
    if(this.state.weight && this.state.heightFeet && this.state.heightInch){

        let INCHES_IN_FEET = 12;

        var height = Number(this.state.heightFeet);
        //Convert feet to Inches
        height = height * INCHES_IN_FEET;
        //add the inches input field
        height = height + Number(this.state.heightInch);

        let weight = this.state.weight;

        var bmi = (weight / (height * height)) * 703;
        bmi = bmi.toFixed(4);
        return bmi;
    }
}

getBMIResults(bmi) {
    let bmiResults = {
        label:'',
        alertClass: '',
    };

    if(bmi <= 18.5){
        bmiResults.label = 'UnderWeight';

    }else if(bmi <= 24.9) {
        bmiResults.label = 'Normal weight'
    }else if (bmi <= 29.9){
     bmiResults.label ='OverWeight';
    }else if (bmi >= 30){
  bmiResults.label='Obesity';
    }else{
        bmiResults.label= 'BMI'
    }
    return bmiResults;
}
    render () {
        let bmi = this.calculateBMI();
        let results = this.getBMIResults(bmi)
        return(
            <>

<h2>BMI Calculation App</h2>
        <h3> hello {this.height}{this.weight}</h3>
        <div>
       <label> Enter your height in Feet: 
           <br/> <input type="number"
            placeholder="Enter Your Height"
             onChange={this.handleHeightFeetChange}
             value={this.state.heightFeet}
            />
            </label> <br /><br/>

            <label> Enter your height in Inches: 
           <br/> <input type="number"
            placeholder="Enter Your Height"
             onChange={this.handleHeightInchChange}
             value={this.state.heightInch}
            />
            </label> <br /><br/>
            
            <label>Enter your weight in lb:
             <br/><input type="number" 
               placeholder="Enter Your Height"
               onChange={this.handleWeightChange}
               value={this.state.weight}
             />
             </label>
             </div>

             <div>
                 <BmiDisplay bmi = {bmi} label={results.alertClass}/>
             </div>

            </>
        )
    }
}

function BmiDisplay(props) {
    return (
        <>
        <div>{props.bmi || '------'}</div>
        <div>{props.label}</div>
        </>
    )
}

export default BMICalculator;