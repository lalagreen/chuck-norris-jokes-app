import React, { useState, Fragment, useEffect } from 'react';
import './App.css';
import { CategoryJoke } from './components/CategoryJoke/CategoryJoke';
import { RandomJoke } from './components/randomJoke/randomJoke';
import image from "./bitmap@2x.png";
import image1 from "./bitmap_2.png";
import clap from "./hand.png";
import clap1 from "./hand-copy.png";
import axios from 'axios';

function App() {
  const [jokes, setJokes ] = useState({
    joke: 'Select a category for a great joke, o just a random with the buttons.'
  });
  const onButtonClick = (joke) =>{
    console.log(joke)
    setJokes({joke:joke})
  }
  let [likeNumber, setLikeNumber] = useState(0);
  let [dislikeNumber, setDislikeNumber] = useState(0);

  let handleLikeClick = () =>{
    setLikeNumber(likeNumber += 1)
  }
  let handleDislikeClick = () =>{
    setDislikeNumber(dislikeNumber += 1)
  }
  const [categories,setCategories] = useState([]);
  useEffect(()=>{
      axios.get("https://api.chucknorris.io/jokes/categories").then(res=>{
         if(res.data){
             for(let item of res.data){
              setCategories(old=>[...old,{value:item}])
               }
          }
      })
  },[]);

  return (
    <Fragment>
      <div className="header" style={{ backgroundImage: `url(${image})`}}>
        <div className="header-title"> The Joke Bible
	</div>
      </div>
      <CategoryJoke categories={categories} onButtonClick={onButtonClick}/>
      <RandomJoke onButtonClick={onButtonClick}/>
      <div className="joke-container">       <p className="single-joke">            {jokes.joke}                       </p>
	<div className="clap-container">
	  <button style={{ backgroundImage: `url(${clap})`}} className="clap-up" onClick={handleLikeClick}>
	  <span>{likeNumber}</span>
	  </button>
	  <button style={{ backgroundImage: `url(${clap1})`}} className="clap-down" onClick={handleDislikeClick}>
	  <span>{dislikeNumber}</span>
	  </button>
	</div>
      </div>
      <div className="footer" style={{ backgroundImage: `url(${image1})` }}>
      </div>
    </Fragment>
  );
}

export default App;
