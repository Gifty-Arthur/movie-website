
import React, {useState, useEffect} from'react';
import bgImg from '../images/bg-transformer.jpg';

import './banner.css'; 
import MovieContent from '../components/MovieContent';
import MovieDate from '../components/MovieDate';
import PlayBtn from '../components/PlayBtn';
 

function Banner() { 
    const [movies, setMovies] = useState([]);
    const fetchData = ()=>{
        fetch("https://localhost:3000/data/movieData.json")
        .then(res=>res.json())
        .then(data =>setMovies(data))
        .catch(e=>console.log(e.message));
    };

    useEffect(()=>{
        fetchData()
    },[]);
  return (
    <div className='banner'>
      <div className="movie">
        <img src={bgImg} alt="Background Image" className="bgImg active" />
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6co l-md-12">
                    <MovieContent/>
                 


                </div>
                <div className="col-lg-6co l-md-12">

                  <div className="trailler">
                    <p>Watch </p>
                  </div>
                            <MovieDate/>
                            <PlayBtn/>
                     
                    </div> 
            </div>
        </div>
      </div>
    </div>
  );
}

export default Banner
