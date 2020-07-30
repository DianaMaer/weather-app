import React from 'react';

const CurrentWeather = (props) => {
    return(
        <div className="current-container">
            <h3>Current Weather</h3>
            <div className="current-info">
                <p>Temperature: {Math.round(props.list[0].main.temp)}℃</p>
                <p>Sky: {props.list[0].weather[0].description}</p>
                <p>Humidity: {props.list[0].main.humidity}% </p>
                <p>Feels like: {Math.round(props.list[0].main.feels_like)}℃</p>
            </div>
        </div>
    )

}

export default CurrentWeather