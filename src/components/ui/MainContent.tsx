import MovieList from "./MovieList.tsx";
import MovieAPI from "../api/ApiAccess.tsx"
import { UseAuth } from "../AuthContext.tsx";
import Sidebar from "./Sidebar.tsx"
import {MovieQuery, MovieInfo, SidebarProps } from "src/interfaces.ts";

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