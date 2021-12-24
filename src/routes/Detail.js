import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import MainTitle from '../components/MainTitle';
import styles from './Detail.module.css';



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
      <div className={styles.container}>
        {
          loading ?
            <h1 className={styles.loader}>Loading...</h1>
            :
            <div>
              <MainTitle />
              <div className={styles.back}>
                <Link to='/'>← Back</Link>
              </div>
              <div className={styles.movie}>
                <img src={detailMovie.medium_cover_image} alt="coverImg" className={styles.movie__img} />
                <h1 className={styles.movie__title}>
                  {detailMovie.title}
                  <span className={styles.movie__year}> ({detailMovie.year})</span>
                </h1>
                <div>
                  <div className={styles.movie__rating}>Rating: {detailMovie.rating} </div>
                  <div className={styles.movie__like}>Like: {detailMovie.like_count} </div>
                </div>
                <p className={styles.movie__desc}>
                  <h3>Description</h3>
                  {detailMovie.description_full}
                </p>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default Detail
