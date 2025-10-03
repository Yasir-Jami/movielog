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
  let retrievedLists = {} as MovieList[];

  await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    }
  })
  .then(res => res.json())
  .then(movielists => {
    retrievedLists = movielists
    return retrievedLists;
  })
  .catch(err => console.error("Error:", err));
  
  return retrievedLists;
}

function MainContent ({currentMovieList, setCurrentMovieList, selectedTab, setSelectedTab}: MainContentProps) {
  const [renderPhase, setRenderPhase] = useState<string>("loading");
  const userMovieLists = {} as MovieList[];
  const navigate = useNavigate();

  let content = {} as React.JSX.Element;

  if (renderPhase == "loading") {
     content = (<span className="loader"/>)
  }

  else {
    switch(selectedTab) {
      case MainContentTab.Home:
        logger.log(`{MainContentTab.Home} tab`);
        content = <MovieListContainer currentMovieList={currentMovieList}/>;
        break;
      case MainContentTab.Lists:
        logger.log("Lists tab");
        content = <MovieListSelector 
        userMovieLists={userMovieLists}
        currentMovieList={currentMovieList} 
        setCurrentMovieList={setCurrentMovieList}
        setSelectedTab={setSelectedTab}/>;
        break;
      case MainContentTab.Reviews:
        logger.log("Reviews tab");
        content = <Placeholder/>;
        break;
      case MainContentTab.Settings:
        logger.log("Settings tab");
        content = <Placeholder/>;
        break;
      case MainContentTab.Login:
        logger.log("Switching to login page");
        navigate("/login");
        break;
      default:
        logger.log("Default tab");
        content = <MovieListContainer currentMovieList={currentMovieList}/>;
    }
  }

  async function getAllLists() {
    const retrieveLists = await retrieveUserLists();
    console.log(retrieveLists);
    if (retrieveLists && Object.keys(retrieveLists).length !== 0) {
      setCurrentMovieList(retrieveLists[0]); // Change to id set in localstorage, changes when selecting a list in lists tab
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