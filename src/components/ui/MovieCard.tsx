import { MovieInfo } from "interfaces";
import "@styles/MovieCard.css"
import { Calendar } from "lucide-react";

// • - use to separate year and genre

function MovieCard(props: MovieInfo) {
  const { Title, Poster, Year, Genre } = props;

  return(
    <div className="movie-card">
      <div className="movie-card__image-overlay"></div>
      <img className="movie-card__image" alt={Title} src={Poster}></img>
      <p className="movie-card__title">{Title}</p>
      <div className="movie-card__metadata">
        
        <Calendar className="movie-card__calendar"/>
        <p className="movie-card__year">{Year}</p>
        <p className="movie-card__separator">•</p> 
        <p className="movie-card__genre">{Genre}</p> 
      </div>
    </div>
  )
}

export default MovieCard;