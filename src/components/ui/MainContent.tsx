import Sidebar from "@components/ui/Sidebar";
import MovieList from "@components/ui/MovieList";

function MainContent () {
  // On success
  return (
    <div className="main">
      <Sidebar/>
      <MovieList/>
    </div>
  )
}

export default MainContent;