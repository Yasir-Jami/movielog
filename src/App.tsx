//import Footer from "./components/Footer.tsx";
import MovieList from "./components/MovieList.tsx";

// Movie Container variables
let presentListText: string = "Currently Watching";
let futureListText: string = "To Watch";
let pastListText: string = "Watched";
//let searchText: string = "Find a movie you like";
let searchText: string = "";

let presentMovieCount: number = 3;
let futureMovieCount: number = 3;
let pastMovieCount: number = 5;

export default function App() {
  
  return(
  <div>
      <div className="main">
        <h1>{searchText}</h1>
        <MovieList listName = {presentListText} movieCount={presentMovieCount} />
        {/*
        <MovieList listName = {futureListText} movieCount={futureMovieCount}/>
        <MovieList listName = {pastListText} movieCount={pastMovieCount}/>
        */}
      </div>
    </div>
  );
}