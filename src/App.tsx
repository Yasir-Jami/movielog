//import Footer from "./components/Footer.tsx";
import MovieListContainer from "./components/MovieListContainer.tsx";

// Movie Container variables
let presentListText: string = "Currently Watching";
let futureListText: string = "To Watch";
let pastListText: string = "Watched";
//let searchText: string = "Find a movie you like";
let searchText: string = "";

let presentMovieCount: number = 2;
let futureMovieCount: number = 3;
let pastMovieCount: number = 5;

export default function App() {
  
  return(
  <div>
      <div className="main">
        <h1>{searchText}</h1>
        <MovieListContainer listName = {presentListText} movieCount={presentMovieCount} />
        <MovieListContainer listName = {futureListText} movieCount={futureMovieCount}/>
        <MovieListContainer listName = {pastListText} movieCount={pastMovieCount}/>
      </div>
    </div>
  );
}