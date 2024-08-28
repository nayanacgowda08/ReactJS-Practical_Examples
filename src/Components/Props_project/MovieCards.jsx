import React from 'react'
import './movies.css'
import { movieData } from './moviedata'
import MovieCard from './MovieCard'

const MovieCards = () => {
    // console.log(movieData);
    
  return (
    <>
        <div className="movieCard">
            <div className="header">
                Movie Info
            </div>
            <div className='mainCard'>
                {
                    movieData.map((e)=>{
                        let {movieName,actor,actress,rating,movieUrl,movieDes} = e;
                        return (
                           <>
                           <MovieCard movieName={movieName} actor={actor} actress={actress} rating={rating}
                            movieUrl={movieUrl} movieDes={movieDes}  />  
                          
                           </>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default MovieCards