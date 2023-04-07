// import { useState, useEffect } from "react";



// function WeatherData({ city }) {
//     const [data, setData] = useState(null);
//     const fetchData = async () => {
//         try {
//           const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=Milano,it&APPID=${API_KEY}`
//           );
//           const result = await response.json();
//           setData(result);
//           console.log(result)
//         } catch (error) {
//           console.error(error);
//         }
//       };

//     useEffect(() => {


//       fetchData();
//     }, [city]);



//     return (
//       <div>
//         {data ? (
//           <>
//             <h2>{data.name}</h2>
//             <p>{data.weather[0].description}</p>
//             <p>Temperatura: {data.main.temp}°C</p>
//             <p>Pressione: {data.main.pressure} hPa</p>
//             <p>Umidità: {data.main.humidity}%</p>
//           </>
//         ) : (
//           <p>Caricamento in corso...</p>
//         )}
//       </div>
//     );
//   }

//   export default WeatherData;


import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const API_KEY = '7aa5b07a3beb266b1c8a495aa93790c8';


const WeatherData = (props) => {
    const [weather, setWeather] = useState(null);

    const changeGrades = (celsius) => {
        return Math.round(celsius - 273.15);
    };

    const fetchWeatherData = async () => {
        setWeather(null);

        if (!props.city) {
            return
        }
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${API_KEY}`);

            if (response.ok) {
                const data = await response.json();
                setWeather(data);
                console.log(data)
            } else {
                console.log('errore fetch weather')
            }
        } catch (error) {
            console.log("errore nelle chiamate")
        }

    }


    useEffect(() => {
        fetchWeatherData();
    }, [props.city]);

//     const dailyForecasts = forecast.list.filter((item) =>
//     item.dt_txt.includes("12:00:00")
//   );
  
    return (
        <>
            {weather && (
                
                    <Card className='fs-2 card'>
                        <Card.Header>{weather.name}</Card.Header>
                        <Card.Body>
                            <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" className="weatherIcon" />
                            <Card.Text>Current Temperature: {changeGrades(weather.main.temp)} °C</Card.Text>
                            <Card.Text>Feels Like: {changeGrades(weather.main.feels_like)} °C</Card.Text>
                            <Card.Text>Humidity: {weather.main.humidity}%</Card.Text>
                            <Link to='/details'><Button>Details</Button></Link>
                        </Card.Body>
                    </Card>
                    
            )}
        </>


    )
}

export default WeatherData;