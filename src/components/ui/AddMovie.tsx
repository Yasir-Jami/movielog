import "@styles/AddMovie.css";
import { MovieMetadata } from "types";
import { MovieList } from "types";
import { getUserEmail } from "@components/utils/UserUtils";
import { toast } from "react-toastify";
import AddMovieSearch from "./AddMovieSearch";

interface AddMovieProps {
  currentMovieList: MovieList,
  updateCurrentList: React.Dispatch<React.SetStateAction<MovieList>>,
  searchBarOpen: boolean,
  setSearchBarOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const addMovieErrorNotification = (errorReason: string) => {
  toast.error(errorReason);
}

async function addMovieToList(
  movie: MovieMetadata, 
  movieList: MovieList, 
  updateCurrentList: React.Dispatch<React.SetStateAction<MovieList>>, 
  email: string) {
  const url = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_MOVIE_LISTS}${import.meta.env.VITE_API_ADD_MOVIE}`;
  console.log("MovieInfo before sending: ", movie);
  
  await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify( { email: email, movieMeta: movie, listName: movieList.listName } ),
  })
  .then(response => {
    logger.log(response);
    if (!response.ok) {
      let errorReason = "" as string;

      if (response.status == 409) {
        errorReason = `${movie.Title} is already in ${movieList.listName}`;
      }
      else {
        errorReason = "Error adding a new movie";
      }
      addMovieErrorNotification(errorReason);
      throw new Error("HTTP Error " + response.statusText);
    }
    return response.json()})
  .then(data => {
    let newList: MovieList = {
      ...movieList,
      movies: [...movieList.movies, data.movie],
    };
    updateCurrentList(newList);
    toast.success(data.message);
  })
  .catch(err => logger.error("Error:", err)); 
}

function AddMovie({currentMovieList, updateCurrentList, searchBarOpen, setSearchBarOpen}: AddMovieProps) {
  const email = getUserEmail();

  const handleMovieSelection = (selectedMovie: MovieMetadata) => {
    addMovieToList(selectedMovie, currentMovieList, updateCurrentList, email);
  }

  return (
    <div className="add-movie">
      <AddMovieSearch 
      onMovieSelect={handleMovieSelection} 
      searchBarOpen={searchBarOpen} 
      setSearchBarOpen={setSearchBarOpen}/>
    </div>
  )
}

export default AddMovie;