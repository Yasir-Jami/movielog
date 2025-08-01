import "/src/styles/MovieList.css";
import { MovieGridProps, MovieInfo } from "interfaces";
import { useEffect, useState } from "react";
import Searchbar from "@components/ui/Searchbar"
import MovieGrid from "@components/ui/MovieGrid";
import AddMovie from "@components/ui/AddMovie";

function getMovieLists() {
  

  useEffect(() => {
    const getLists = async () => {
      const response = await fetch("URL");
      const data = await response.json();
      
    }


  }, []);

}

function MovieList() {
  const moviesArray: MovieInfo[] = [];
  
  const movieProps: MovieGridProps = {
    movieListName: "Watching",
    //movieCount: moviesArray.length,
    movieCount: 9,
    movieArray: moviesArray,
  }

  // Retrieve list to render

  return (
    <div className="list-container">
      <Searchbar />
      <div className="list-container__info">
        <div className="list-container__metadata">
          <h2 className="list-container__list-name">{movieProps.movieListName}</h2>
          <p className="list-container__movie-count">{movieProps.movieCount} movies</p>
        </div>
        <AddMovie />
      </div>
      <MovieGrid />
    </div>
  )
}

export default MovieList;