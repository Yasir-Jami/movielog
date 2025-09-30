import "@styles/index.css";
import { MainContentTab } from "types";
import { useRef, useState } from "react";
import { MovieList } from "types";
import Header from "@components/ui/Header";
import Sidebar from "@components/ui/Sidebar";
import MainContent from "@components/ui/MainContent";

interface MovieSearchInputProps {
  handleMovieSearchClick: () => void,
  movieSearchRef: React.RefObject<HTMLInputElement>,
}

export default function Home() {
  const placeholderMovieList: MovieList = {
    listName: "Watching",
    movies: [],
  }
  
  const [selectedTab, setSelectedTab] = useState<MainContentTab>(MainContentTab.Home);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [currentMovieList, setCurrentMovieList] = useState<MovieList>(placeholderMovieList);
  const movieSearchRef = useRef<HTMLInputElement>(null);

  const handleMovieSearchButtonClick = () => {
    if (movieSearchRef.current) {
      movieSearchRef?.current.focus();
    }
  }

 return (
  <div className="main-content">
    <Header 
    currentMovieList={currentMovieList} 
    updateCurrentList={setCurrentMovieList}
    sidebarOpen={sidebarOpen} 
    setSidebarOpen={setSidebarOpen}
    />
    <div className="home-page">
      <Sidebar 
      selectedTab={selectedTab} 
      onSelectTab={setSelectedTab} 
      sidebarOpen={sidebarOpen}
      />
      <MainContent 
      selectedTab={selectedTab} 
      currentMovieList={currentMovieList} 
      setCurrentMovieList={setCurrentMovieList}
      setSelectedTab={setSelectedTab}
      />
    </div>
  </div>
  )
}