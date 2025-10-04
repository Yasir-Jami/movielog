import "@styles/index.css";
import { MainContentTab } from "types";
import { useState } from "react";
import { MovieList } from "types";
import Header from "@components/ui/Header";
import Sidebar from "@components/ui/Sidebar";
import MainContent from "@components/ui/MainContent";

export default function Home() {
  const placeholderMovieList: MovieList = {
    listName: "Watching",
    movies: [],
  }
  
  const [selectedTab, setSelectedTab] = useState<MainContentTab>(MainContentTab.Home);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [currentMovieList, setCurrentMovieList] = useState<MovieList>(placeholderMovieList);

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
      currentMovieList={currentMovieList} 
      updateCurrentList={setCurrentMovieList}
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