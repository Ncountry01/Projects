import logo from './logo.svg';
import './App.css';
import BmiApp from './components/BmiFunc';
import BMICalculator from './components/BmiCalc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
 <BMICalculator />
 <BmiApp /> 

    </div>
  );
}

export default App;
