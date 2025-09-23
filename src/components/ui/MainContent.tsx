import MovieListContainer from "@components/ui/MovieListContainer";
import { useNavigate } from "react-router-dom";
import { MainContentTab, MovieList } from "types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface MainContentProps {
  selectedTab: MainContentTab,
  currentMovieList: MovieList,
  setCurrentMovieList: React.Dispatch<React.SetStateAction<MovieList>>,
}

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
    retrievedList.listName = movielist.listName;
    retrievedList.movies = movielist.movies;
    return retrievedList;
  })
  .catch(err => console.error("Error:", err));
  
  return retrievedList;
}

function MainContent ({currentMovieList, setCurrentMovieList, selectedTab}: MainContentProps) {
  const [renderPhase, setRenderPhase] = useState<string>("loading");
  const [selectedList, setSelectedList] = useState<string>("Watching");
  const navigate = useNavigate();

  let content = {} as React.JSX.Element;

  if (renderPhase == "loading") {
     content = (<span className="loader"/>)
  }

  else {
    switch(selectedTab) {
      case MainContentTab.Home:
        console.log("Home tab");
        content = <MovieListContainer currentMovieList={currentMovieList} addNewMovieToList={setCurrentMovieList}/>;
        break;
      case MainContentTab.Lists:
        console.log("Lists tab");
        content = <></>;
        break;
      case MainContentTab.Reviews:
        console.log("Reviews tab");
        content = <></>;
        break;
      case MainContentTab.Settings:
        console.log("Settings tab");
        content = <></>;
        break;
      case MainContentTab.Login:
        console.log("Switching to login page");
        navigate("/login");
        break;
      default:
        console.log("");
        content = <MovieListContainer currentMovieList={currentMovieList} addNewMovieToList={setCurrentMovieList}/>;
    }
  }

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