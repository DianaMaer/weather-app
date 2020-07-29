import React from 'react';

const Title = (props) => {
    console.log('title:', props)
    return(
        <h1>Hello from {props.city}</h1>
    )
}

export default Title;