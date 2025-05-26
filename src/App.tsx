//import Footer from "./components/Footer.tsx";
import MovieListContainer from "./components/MovieListContainer.tsx";

// Movie Container variables
let presentListText: string = "Currently Watching";
let futureListText: string = "To Watch";
let pastListText: string = "Watched";

let presentNodeCount: number = 2;
let futureNodeCount: number = 3;
let pastNodeCount: number = 5;

let searchText: string = "Find a movie you like";

export default function App() {
  
  return(
  <div>
    <div className="container">
      <div className="main">
        <h1>{searchText}</h1>
        <MovieListContainer listName = {presentListText} numberOfNodes={presentNodeCount} />
        <MovieListContainer listName = {futureListText} numberOfNodes={futureNodeCount}/>
        <MovieListContainer listName = {pastListText} numberOfNodes={pastNodeCount}/>
      </div>
    </div>
  </div>
  );
}