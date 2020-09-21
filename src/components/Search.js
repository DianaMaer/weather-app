import React, { useState } from 'react';

const Search = (props) =>{
    const [inputText, setInputText] = useState('');
        
    const handleChange = (event) => {
        setInputText(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        props.onSearch(inputText);
    }

       // console.log(this.state)
        return(
                <form onSubmit={handleSubmit}>
                    <input className="text-input" type="text" onChange={handleChange}/>
                    <input className="button-input"type="submit" value="Search"/>
                </form>
        )
    
}

export default Search