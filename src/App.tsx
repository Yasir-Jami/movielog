import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx";
import MovieListContainer from "./components/MovieListContainer.tsx";

// Movie Container variables
let futureListText: string = "To Watch";
let pastListText: string = "Previously Watched";
let presentListText: string = "Currently Watching";

export default function App() {
  
  return(
    <div className="container">
      <Header />
      <MovieListContainer listName = {presentListText}/>
      <MovieListContainer listName = {futureListText}/>
      <MovieListContainer listName = {pastListText}/>
    </div>
  );
}