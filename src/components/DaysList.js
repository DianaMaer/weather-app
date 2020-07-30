import React, { useState, useEffect } from 'react';
import DayCard from './DayCard';

const DaysList = (props) =>{
    console.log(props)
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => setData(), [props])

    const setData = () => {
        setDailyData(
            props.list.filter(item => item.dt_txt.includes('15:00:00'))
        )
    } 
    console.log('dailyData', dailyData);
     return( 
            <div className="daily-info"> 
                {
                    dailyData.map(item => <DayCard {...item} key={item.dt_txt} />)
                }
            </div>
    )
}

export default DaysList;
