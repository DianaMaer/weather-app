import React from 'react';
import Title from './Title';
import CurrentWeather from './CurrentWeather';
import DaysList from './DaysList';

const Home = (props) => {
    console.log(props)
    return(
        <>
            <Title city={props.city.name}/>
            <CurrentWeather {...props}/>
            <DaysList {...props}/>

        </>
    )
}

export default Home;