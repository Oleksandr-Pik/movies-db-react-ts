import { Link } from 'react-router-dom';
import styles from './MovieCard.module.scss';


interface MovieCardProps {
  id: number;
  title: string;
  overview: string;
  popularity: number;
}

export function MovieCard({ id, title, overview, popularity }: MovieCardProps) {
  return (
    <div className={styles.card}>
      <img
        className={styles.thumbnail}
        src="/movie-thumb.png"
        alt="Movie thumnail"
      />
      <div className={styles.content}>
        <div>
        <Link to={`/movies/${id}`}>{title}</Link>
        </div>
        <div className={styles.overview}>{overview}</div>
        <div className={styles.popularity}>{popularity}</div>
      </div>
    </div>
  )
}

export default MovieCard
