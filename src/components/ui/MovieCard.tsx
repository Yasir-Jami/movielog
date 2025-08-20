import "@styles/MovieCard.css";
import { MovieInfo } from "types";
import { Calendar, Drama } from "lucide-react";

function MovieCard(props: MovieInfo) {
  const { Title, Poster, Year, Genre } = props;

  return(
    <div className="movie-card">
      <div className="movie-card__image-overlay"></div>
        <img className="movie-card__image" alt={Title} src={Poster}></img>
        <p className="movie-card__title">{Title}</p>
        <div className="movie-card__metadata">
          <span className="movie-card__year">
            <Calendar className="movie-card__calendar"/>
            <p className="movie-card__year-text">{Year}</p>
          </span>
          <span className="movie-card__genre">
            <Drama className="movie-card__mask"/>
            <p className="movie-card__genre-text">{Genre}</p> 
          </span>
        </div>
    </div>
  )
}

export default MovieCard;