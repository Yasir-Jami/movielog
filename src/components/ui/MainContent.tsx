import MovieListContainer from "@components/ui/MovieListContainer";
import MovieListSelector from "@components/ui/MovieListSelector";
import Placeholder from "@components/ui/Placeholder";
import { useNavigate } from "react-router-dom";
import { MainContentTab, MovieList } from "types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface MainContentProps {
  selectedTab: MainContentTab,
  currentMovieList: MovieList,
  setCurrentMovieList: React.Dispatch<React.SetStateAction<MovieList>>,
  setSelectedTab: React.Dispatch<React.SetStateAction<MainContentTab>>,
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
    const movieLists: MovieList[] = await res.json();
    return movieLists;
  }

  catch (err) {
    console.error("Error:", err);
    return [];
  }
}

function MainContent ({currentMovieList, setCurrentMovieList, selectedTab, setSelectedTab}: MainContentProps) {
  const [renderPhase, setRenderPhase] = useState<string>("loading");
  const [userLists, setUserLists] = useState<MovieList[]>([]);
  const navigate = useNavigate();

  let content = {} as React.JSX.Element;

  if (renderPhase == "loading") {
     content = (<span className="loader"/>)
  }

  else {
    switch(selectedTab) {
      case MainContentTab.Home:
        content = <MovieListContainer currentMovieList={currentMovieList}/>;
        break;
      case MainContentTab.Lists:
        content = <MovieListSelector 
        userMovieLists={userLists}
        setCurrentMovieList={setCurrentMovieList}
        setSelectedTab={setSelectedTab}/>;
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
        content = <MovieListContainer currentMovieList={currentMovieList}/>;
    }
  }

  async function getAllLists() {
    const retrievedLists = await retrieveUserLists();
    if (retrievedLists && Object.keys(retrievedLists).length !== 0) {
      setUserLists(retrievedLists);
      setCurrentMovieList(retrievedLists[0]); // Change to ID set in localstorage
    }
    else {
      toast.error("Failed to retrieve list from server");
    }
  }
  
  useEffect(() => {
    getAllLists();
  }, []);

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