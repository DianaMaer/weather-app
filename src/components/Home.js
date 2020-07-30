import React from 'react';
import Title from './Title';
import CurrentWeather from './CurrentWeather';
import DaysList from './DaysList';
import Search from './Search'

const Home = (props) => {
    console.log(props)
    return(
        <>
            <Search onSearch={props.onSearch} />
            <Title city={props.city.name}/>
            <CurrentWeather {...props}/>
            <DaysList {...props}/>

        </>
    )
}

export default Home;