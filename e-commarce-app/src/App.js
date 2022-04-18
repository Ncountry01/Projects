import logo from './logo.svg';
import './App.css';
import NavbarApp from './navbar/Navbar';
import HomeApp from './navbar/Home';
import {Routes, Route} from 'react-router-dom'
import ProductApp from './components/Product';
import AboutApp from './components/About';
import ContactApp from './components/Contact';
import LogInApp from './component/Login';
import RegisterApp from './component/Register';
import Products from './components/Product1';
import Product from './components/Product1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <NavbarApp />
    <Routes>
      <Route path='/home' element={<HomeApp />} /> 
      <Route path='/products' element={<ProductApp />} />
      <Route path='/products/:id' element={<Product />} />
      <Route path='/about' element={<AboutApp />} /> 
      <Route path='/contact' element={<ContactApp />} /> 
      <Route path='/login' element={<LogInApp />} /> 
      <Route path='/signup' element={<RegisterApp />} /> 
    </Routes>
    </div>
  );
}

export default App;
