import React from 'react'

const MovieCard = (data) => {
  let {movieName,actor,actress,rating,movieUrl,movieDes} = data
  return (
    <>
      <div className="m-card">
        <div className="container">
          <div className="imgs">
            <img src={movieUrl} alt="" />
          </div>
          <div className="title">
            {movieName}
          </div>
          <table>
            <tr>
              <th>Actor : </th>
              <th>{actor}</th>
            </tr>
            <tr>
              <th>Actress : </th>
              <th>{actress}</th>
            </tr>
            <tr>
              <th>Rating : </th>
              <th>{rating}</th>
            </tr>
          </table>
          <div className="desc">
            {movieDes}
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard