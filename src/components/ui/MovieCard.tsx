import "@styles/MovieCard.css";
import { useState } from "react";
import { MovieInfo, MovieCardProps } from "types";
import { Calendar, Drama, Heart, Trash2 } from "lucide-react";
import ImageNotFound from "assets/svgs/image-not-found.svg";

function MovieCard(props: MovieInfo) {
  const { Title, Poster, Year, Genre } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(prevIsFavorite => !prevIsFavorite);
    console.log(isFavorite);
  }

  return(
    <div className="movie-card">
        <span className={`movie-card-favorite-wrapper ${isFavorite ? "active" : ""}`} >
          <Heart 
          className={`movie-card-favorite-icon ${isFavorite ? "active" : ""}`} 
          fill="none" 
          size={24}
          onClick={toggleFavorite}
          ></Heart>
        </span>
        <span className="movie-card-delete-wrapper">
          <Trash2 className="movie-card-delete-icon"></Trash2>
        </span>
        <img 
        className="movie-card__image" 
        alt={Title} 
        src={Poster} 
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = ImageNotFound}}></img>
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