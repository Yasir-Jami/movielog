import Sidebar from "@components/ui/Sidebar";
import MovieList from "@components/ui/MovieList";
import {MovieQuery, MovieInfo, SidebarProps } from "interfaces.ts";

//const {isAuthenticated, user} = UseAuth();

function retrieveListData() {
  console.log("GG");
  // Get selected list and retrieve data from database
}


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