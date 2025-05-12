import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx";
import MovieListContainer from "./components/MovieListContainer.tsx";

export default function App() {
  
  return(
    <div className="container">
      <Header />
      <MovieListContainer />
      <MovieListContainer />
      <MovieListContainer />
      <Footer />
    </div>
  );
}