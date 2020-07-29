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
            <div>
                <div>Test from search</div>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange}/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    
}

export default Search