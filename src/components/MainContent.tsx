import MovieList from "./MovieList.tsx";
import MovieAPI from "./api/ApiAccess.tsx"
import {MovieQuery, MovieInfo} from "src/interfaces.ts"

// Movie Container variables
let defaultQuery: MovieQuery = {
  Title: "hunter x hunter",
}
let presentListText: string = "Currently Watching";
let futureListText: string = "To Watch";
let pastListText: string = "Watched";

let presentMovieCount: number = 3;
let futureMovieCount: number = 3;
let pastMovieCount: number = 5;

//let searchText: string = "Find a movie you like";
let searchText: string = "";

/*
function getMovieLists() {
  let movieLists = []; // List of lists, each sublist will contain the full movie list data
	//get data from database (list name, number of movies in list, array containing IDs of all movies, will need to preserve order added)
	movieLists.push([listName, numberOfMovies, array of movie IDs with preserved order])
	
	return movieLists
}
*/

//TODO - Retrieve info by making queries to database based on title/IMDB ID
function getMovieData(query: MovieQuery): MovieInfo {
  const data: MovieInfo = MovieAPI(query);
  

  return data;
}

function MainContent () {
  
  
  
  return (
  <div className="main">
    <h1>{searchText}</h1>
    <MovieList listName = {presentListText} movieCount={presentMovieCount} movieInfo={getMovieData(defaultQuery)}/>
    <MovieList listName = {futureListText} movieCount={futureMovieCount} movieInfo={getMovieData(defaultQuery)}/>
    <MovieList listName = {pastListText} movieCount={pastMovieCount} movieInfo={getMovieData(defaultQuery)}/>
  </div>
  )

  return (
    <div className="error-movie-retrieval">Error. Failed to retrieve movie data.</div>
  )
}

export default MainContent