import Sidebar from "@components/ui/Sidebar";
import MovieListContainer from "@components/ui/MovieListContainer";
import { MovieList, MovieInfo } from "types";
import React, { useEffect, useState } from "react";

async function getMovieList(listName: string) {
  const url = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_MOVIE_LISTS}${import.meta.env.VITE_API_RETRIEVE_LIST}`;
  let list = {} as MovieList;
  
  await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ listName })
  })
  .then(res => res.json())
  .then(data => {
    list.listName = data.listWithMovies.listName || "Watching";
    list.movies = data.listWithMovies.movies || [];
    return list;
  })
  .catch(err => logger.error("Error:", err));

  return list;
}

function MainContent () {
  const placeholderList: MovieList = {
    listName: "Watching",
    movies: [],
  }
  
  const [selectedList, setSelectedList] = useState<string>(placeholderList.listName);
  const [currentMovieList, setCurrentMovieList] = useState<MovieList>(placeholderList);

  /*
  function addNewMovieToList(
    movieList: MovieList, 
    movie: MovieInfo, 
    setCurrentMovieList: React.Dispatch<React.SetStateAction<MovieList>>) {
    logger.log("Movie:", movie);
    logger.log("Movie array:", movieList.movies);
    movieList.movies.push(movie);
    logger.log("Movie array after adding movie:", movieList.movies);
  
    //setCurrentMovieList(movieList);
  }
  */

  async function getListData() {
      const retrievedList = await getMovieList(selectedList);
      setCurrentMovieList(retrievedList);
  }
  
  useEffect(() => {
    getListData();
  }, [selectedList])  
  
  // On success
  return (
    <div className="main">
      <Sidebar onSelectList={setSelectedList} selectedListName={currentMovieList.listName}/>
      <MovieListContainer currentMovieList={currentMovieList} addNewMovieToList={setCurrentMovieList}/>
    </div>
  )
}

export default MainContent;