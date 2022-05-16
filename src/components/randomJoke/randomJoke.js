import React from 'react'
import './randomJoke.css'
import axios from 'axios';

export function RandomJoke({onButtonClick}) {
    const getJoke = () =>{
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(async response => {
            const data = await response.data;
            onButtonClick(data.value)
        })
    }
    return (
        <div className="Random-card">
            <button className="styleRandom" onClick={getJoke}>Random Joke</button>
        </div>
    )
}
