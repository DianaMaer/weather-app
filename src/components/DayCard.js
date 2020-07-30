import React from 'react';
import Moment from 'react-moment';

const DayCard = (props) => {
    console.log(props);
    let date = new Date(props.dt_txt);
    return(
        <div className="day-container">
           {/* <h3>{date.toDateString()}</h3> */} 
            <div className="date-comtainer">
                <Moment format="Do MMM YY">
                    {props.dt_txt}
                </Moment>
            </div>
            <div className="info-date-comtainer">
                <img className="day-icon" src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} alt=""/>
                <div>Temperature: {Math.round(props.main.temp)}℃</div>
                <div>Feels like: {props.main.feels_like}℃</div>
                <div>Humidity: {props.main.humidity}%</div> 
            </div>
            
        </div>
        
    )
}

export default DayCard;