import Header from "./components/Header.tsx"
//import Footer from "./components/Footer.tsx";
import MovieListContainer from "./components/MovieListContainer.tsx";

// Movie Container variables
let futureListText: string = "To Watch";
let presentListText: string = "Currently Watching";
let pastListText: string = "Watched";
let searchText: string = "Find a movie you like";

export default function App() {
  
  return(
  <div>
    <Header />
    <div className="container">
      <div className="main">
        <h1>{searchText}</h1>
        <MovieListContainer listName = {presentListText}/>
        <MovieListContainer listName = {futureListText}/>
        <MovieListContainer listName = {pastListText}/>
      </div>
    </div>
  </div>
  );
}