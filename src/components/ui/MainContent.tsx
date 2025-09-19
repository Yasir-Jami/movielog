import Sidebar from "@components/ui/Sidebar";
import MovieListContainer from "@components/ui/MovieListContainer";
import { MovieList } from "types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

async function getMovieList(listName: string) {
  const url = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_MOVIE_LISTS}${import.meta.env.VITE_API_RETRIEVE_LIST}`;
  let retrievedList = {} as MovieList;
  
  await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ listName })
  })
  .then(res => res.json())
  .then(movielist => {
    //console.log(JSON.stringify(movielist, null, 2));
    retrievedList.listName = movielist.listName;
    retrievedList.movies = movielist.movies;
    return retrievedList;
  })
  .catch(err => console.error("Error:", err));
  
  return retrievedList;
}

function MainContent () {
  const placeholderList: MovieList = {
    listName: "Watching",
    movies: [],
  }
  
  const [renderPhase, setRenderPhase] = useState<string>("loading");
  const [selectedList, setSelectedList] = useState<string>(placeholderList.listName);
  const [currentMovieList, setCurrentMovieList] = useState<MovieList>(placeholderList);
  const [selectedTab, setSelectedTab] = useState<string>("");

  let content = {} as React.JSX.Element;

  if (renderPhase == "loading") {
     content = 
     <>
      <span className="loader"></span>
     </>
  }

  else (
    content =
     <>
     {/*
        <Sidebar onSelectList={setSelectedList} selectedListName={currentMovieList.listName}/>
    */}
        <MovieListContainer currentMovieList={currentMovieList} addNewMovieToList={setCurrentMovieList}/>
     </>
  )

  async function getListData() {
      const tempList = {
        listName: selectedList,
        movies: [],
      } as MovieList;
      setCurrentMovieList(tempList);
      const retrievedList = await getMovieList(selectedList);
      if (Object.keys(retrievedList).length !== 0) {
        setCurrentMovieList(retrievedList);
      }
      else {
        toast.error("Failed to retrieve list from server");
      }
  }
  
  useEffect(() => {
    getListData();
  }, [selectedList]);

  useEffect(() => {
    setRenderPhase("main");
  });

  // On success
  return (
    <div className={renderPhase}>
      {content}
    </div>
  )
}

export default MainContent;