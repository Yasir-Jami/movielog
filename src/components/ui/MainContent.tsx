import MovieListSelector from "@components/ui/MovieListSelector";
import Placeholder from "@components/ui/Placeholder";
import { useNavigate } from "react-router-dom";
import { MainContentTab, MovieList } from "types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "@components/ui/Loader";

interface MainContentProps {
  selectedTab: MainContentTab,
  currentMovieList: MovieList,
  setCurrentMovieList: React.Dispatch<React.SetStateAction<MovieList>>,
}

async function retrieveUserLists() {
  const url = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_MOVIE_LISTS}${import.meta.env.VITE_API_RETRIEVE_LIST}`;

  try {
    const res = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    }});
    return await res.json() as MovieList[];
  }

  catch (err) {
    console.error("Error:", err);
    return [];
  }
}

function MainContent ({currentMovieList, setCurrentMovieList, selectedTab}: MainContentProps) {
  const [userLists, setUserLists] = useState<MovieList[] | null>(null);
  let content = {} as React.JSX.Element;
  const navigate = useNavigate();
  
  useEffect(() => {
    async function getAllLists() {
      const retrievedLists = await retrieveUserLists();
      if (retrievedLists && retrievedLists.length !== 0) {
        setUserLists(retrievedLists);
        setCurrentMovieList(retrievedLists[0]); // Change to ID set in localstorage
      }
      else {
        toast.error("Failed to retrieve list from server");
        setUserLists([]); // TODO send a signal to display a page-wide error when server's down
      }
    }
    getAllLists();
  }, []);

  if (!userLists) {
     content = <Loader/>;
  }

  else {
    switch(selectedTab) {
      case MainContentTab.Lists:
        content = <MovieListSelector 
        userMovieLists={userLists}
        currentMovieList={currentMovieList}
        setCurrentMovieList={setCurrentMovieList}
        />;
        break;
      case MainContentTab.Reviews:
        content = <Placeholder/>;
        break;
      case MainContentTab.Settings:
        content = <Placeholder/>;
        break;
      case MainContentTab.Login:
        navigate("/login");
        break;
      default:
        content = <MovieListSelector 
        userMovieLists={userLists}
        currentMovieList={currentMovieList}
        setCurrentMovieList={setCurrentMovieList}
        />;
    }
  }

  // On success
  return (
    <div className="main">
      {content}
    </div>
  )
}

export default MainContent;