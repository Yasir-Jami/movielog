import PropTypes from "prop-types";
import "./styles/MovieCard.css"
import paddleImage from "./assets/paddle.png"
import shiftImage from "./assets/ShiftSmart.png"
import processSimulatorImage from "./assets/ProcessSimulatorGraph.png"

function MovieCard(props){
  let imageSource = paddleImage; // default

  if (props.movieImage === shiftImage) {
    imageSource = shiftImage;
  }
  else if (props.movieImage === processSimulatorImage){
    imageSource = processSimulatorImage;
  }

  return(
    <div className = "movie-card">
      <h2 className="movie-title" style={{color: props.movieTitleColor}}>{props.movieName}</h2>
      <hr></hr>
      <h4 className="movie-description">{props.movieDescription}</h4>
      <img className="movie-image" src={imageSource} alt="image"></img>
    </div>
  );
}

MovieCard.proptypes = {
  movieName: PropTypes.string,
  movieImage: PropTypes.string,
  movieTitleColor: PropTypes.string,
  movieDescription: PropTypes.string,
}

MovieCard.defaultProps = {
  movieName: "Movie",
  movieImage: "Image",
  movieTitleColor: "#b87333",
  movieDescription: "Description",
}

export default MovieCard