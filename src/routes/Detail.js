import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';


function Detail() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true);
  const [detailMovie, setDetailMoive] = useState([]);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )).json()
    console.log(json)
    setDetailMoive(json.data.movie)
    setLoading(false)
  }, [id])

  useEffect(() => {
    getMovie()
  }, [getMovie])

  console.log(detailMovie)

  return (
    <div>
      <div>
        {
          loading ?
            <h1>Loading...</h1>
            :
            <div>
              <div>
                <Link to='/'>← Back</Link>
              </div>
              <div>
                <img src={detailMovie.medium_cover_image} alt="coverImg" />
                <h1>
                  {detailMovie.title}
                  <span> ({detailMovie.year})</span>
                </h1>
                <div>
                  <span>Rating: {detailMovie.rating} </span>
                  <span>Like: {detailMovie.like_count} </span>
                </div>
                <p>{detailMovie.description_full}</p>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default Detail
