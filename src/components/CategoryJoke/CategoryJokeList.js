import React from 'react'
import './CategoryJokeList.css'
import axios from 'axios';


export function CategoryJokeList({item, onButtonClick}) {
    const getJoke = ()=>{
        axios.get("https://api.chucknorris.io/jokes/random?category="+item)
        .then(async response => {
            const data = await response.data.value;
            console.log(data)
            onButtonClick(data)
        })
    }
    return (
            <input className="category" type="button" onClick={getJoke} value={item}/>
    )
}
