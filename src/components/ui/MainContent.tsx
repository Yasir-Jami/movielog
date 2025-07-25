import Sidebar from "@components/ui/Sidebar";
import MovieList from "@components/ui/MovieList";
//import {MovieQuery, MovieInfo, SidebarProps } from "interfaces.ts";

//const {isAuthenticated, user} = UseAuth();

function MainContent () {
  // On success
  return (
    <div className="main">
      <Sidebar/>
      <MovieList/>
    </div>
  )
}

export default MainContent