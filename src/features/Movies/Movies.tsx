import { Movie } from "../../reducers/movies";
import { connect } from 'react-redux';
import { RootState } from "../../store";
import MovieCard from "./MovieCard";

import styles from "./Movies.module.scss";
import { useState } from "react";

async function getNowPlaying() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2RhM2MyMjFlZjA3NDBhMDFlNmMwZTllNzdkNzJkMCIsInN1YiI6IjY1OTU0Y2UwYTY5OGNmNWExMzQzYTA1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KQiqVQlKVKjNnvB8aixow-b7QW092Q8cG4KYkgdhwxo'
    }
  };

  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  const json = response.json()

  return json;
}

function MoviesFetch() {
  const [movies, setMovies] = useState([]);
  
  return <Movies movies={movies} />;
}

interface MoviesProps {
  movies: Movie[]
}

function Movies({ movies }: MoviesProps) {
  return (
    <section>
      <div className={styles.list}>
        {movies.map(m => (
          <MovieCard
            key={m.id}
            id={m.id}
            title={m.title}
            overview={m.overview}
            popularity={m.popularity}
          />
        ))}
      </div>
    </section>
  )
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top
})

const connector = connect(mapStateToProps);

export default connector(Movies)