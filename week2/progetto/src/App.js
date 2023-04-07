import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WeatherNavbar from './components/WeatherNavbar';
import WeatherData from './components/WeatherData';
import WeatherForecast from './components/WeatherForecast';


function App() {
   const [city, setCity] = useState('');

  const handleSearchSubmit = (city) => {
    setCity(city);
  }
  return (
    <div className="App">
      <BrowserRouter>
      <WeatherNavbar onSearchSubmit={handleSearchSubmit} />
      <Routes>
         <Route path='/' element = {<WeatherData city={city} />} />
         <Route path='/details' element={<WeatherForecast />} />
      </Routes>
     
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
