import React from 'react';

const DayCard = (props) => {
    console.log(props);
    return(
        <div>
            <div>Temperature: {Math.round(props.main.temp)}℃</div>
            <div>Feels like: {props.main.feels_like}℃</div>
            <div>Humidity: {props.main.humidity}</div>
            
        </div>
        
    )
}

export default DayCard;