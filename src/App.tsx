import Header from "./components/Header.tsx"
import MovieListContainer from "./components/MovieListContainer.tsx";

export default function App() {
  
  return(
    <div className="container">
      <Header />
      <MovieListContainer />
      <MovieListContainer />
      <MovieListContainer />
    </div>
  );
}