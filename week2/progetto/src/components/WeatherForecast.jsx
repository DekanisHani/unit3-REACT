import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

//FORECAST NON FUNZIONANTE.. ESPLODE TUTTO AL CLICK DEL BOTTONE SULLA CARD (non ce la faccio più.)

const API_KEY = '7aa5b07a3beb266b1c8a495aa93790c8';


const WeatherForecast = (props) => {
    const [forecast, setForecast] = useState(null);

    const changeGrades = (celsius) => {
        return Math.round(celsius - 273.15);
    };

    const fetchForecastData = async () => {
       
        setForecast(null);
        if (!props.city) {
            return
        }
        try {
            const foResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${API_KEY}`)
            if (foResponse.ok) {
                const foreData = await foResponse.json();
                setForecast(foreData)
                console.log(foreData)
            } else {
                console.log("errore fetch forecast")
            }
        } catch (error) {
            console.log("errore nelle chiamate")
        }

    }


    useEffect(() => {
        fetchForecastData();
    }, [props.city]);

        const dailyForecasts = forecast.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

    return (
        <Container className="weatherCard">
            <Row>
                <Col>
                    <h3>5-Day Forecast</h3>
                    <hr />
                    <div className="d-flex flex-wrap justify-content-around justify-content-md-between">
                        {dailyForecasts.list.map((forecast) => (
                            <div key={forecast.dt}>
                                <p>
                                    {new Date(forecast.dt_txt).toLocaleDateString("en-US", {
                                        weekday: "short",
                                    })}
                                </p>
                                <img
                                    src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                                    alt="weather icon"
                                />
                                <p>{changeGrades(forecast.main.temp)}°C</p>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default WeatherForecast;

