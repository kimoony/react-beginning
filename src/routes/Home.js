import React, { useState, useEffect } from 'react'
import MainTitle from '../components/MainTitle';
import Movie from '../components/Movie';
import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const getMovis = async () => {
    const json = await (await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
    )).json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovis()
  }, [])

  return (
    <div className={styles.container}>
      {
        loading ?
          <h1 className={styles.loader}>Loading...</h1>
          :
          <div>
            <MainTitle />
            <div className={styles.movies}>
              {
                movies.map((movie) => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    year={movie.year}
                    summary={movie.summary}
                    genres={movie.genres}
                  />
                ))
              }
            </div>
          </div>

      }
    </div>
  );
}

export default Home
