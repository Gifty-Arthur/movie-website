import React from 'react';
import './movieContent.css';
import titleImg from '../images/transformer-title.png'
import Button from './Button';

function MovieContent() {
  return (
    <div className="content active">
    <img src={titleImg} alt="Movie Title" className="movie-title" />
    <h4><span>Year</span>
    <span><i>age</i></span>
    <span>length</span>
    <span>category</span>

    </h4>
    <p>
    
"Transformers" is a sci-fi action film franchise known for 
its epic battles between giant alien robots, 
Autobots, and Decepticons. Directed by Michael Bay, the series
 explores the war between these mechanical beings as they seek to control 
 the fate of Earth.
    

    </p>
    <div className="button">
       <Button icon={<ion-icon name="bookmark-outline"></ion-icon>} name= 'Book' 
       color='#ff3700'
       bgColor='#ffffff'
       />
       <Button icon={<ion-icon name="add-outline"></ion-icon>}
       name='My List'
       />
    </div>
    
</div>
  )
}

export default MovieContent
