import { MovieInfo } from "interfaces";
import "@styles/MovieCard.css"
import { Calendar } from "lucide-react";

// • - use to separate year and genre

//function MovieCard(props: MovieInfo) {
function MovieCard() {
  //const { Title, Poster } = props;
  const Title: string = "The Matrix";
  const Poster: string = "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_SX300.jpg";

  return(
    <div className="movie-card">
      <div className="movie-card__image-overlay"></div>
      <img className="movie-card__image" alt={Title} src={Poster}></img>
      <p className="movie-card__title">{Title}</p>
      <div className="movie-card__metadata">
        
        <Calendar className="movie-card__calendar"/>
        <p className="movie-card__year">2011</p>
        <p className="movie-card__separator">•</p> 
        <p className="movie-card__genre">Adventure</p> 
      </div>
    </div>
  )
}

export default MovieCard;