
import React, {useState, useEffect} from'react';
import bgImg from '../images/bg-transformer.jpg';
import titleImg from '../images/transformer-title.png'
import './banner.css'; 


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
                    <div className="content active">
                        <img src={titleImg} alt="Movie Title" className="movie-title" />
                        <h4><span>Year</span>
                        <span><i>age</i></span>
                        <span>length</span>
                        <span>category</span>

                        </h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Morbi commodo felis tempor
                         augue tristique, eget dignissim sapien ornare. 
                         Nullam vel hendrerit metus, a interdum risus. 
                         Etiam commodo lorem arcu, a tempus risus tempus sed.
                        Proin ornare nec massa eget rhoncus.
                         In rutrum aliquet dui, et placerat est molestie id

                        </p>
                        <div className="button">
                            Button
                        </div>
                    </div>


                </div>
                <div className="col-lg-6co l-md-12">
                    <div className="date active">
                        <h2>On 15th 
                            <br/>August</h2>
                    </div>
                       <div className="trailer active">
                        <a href="" 
                        className="playBtn">
                        <ion-icon name="play-outline"></ion-icon>
                        </a>
                        <p>Watch trailer</p>
                        </div> 
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
