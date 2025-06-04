import plusSign from "/src/assets/svgs/plus-1469-svgrepo-com.svg"
import "/src/styles/MovieList.css"

function AddMovie() {
  
  return(
    <div className="add-movie-container">
      <img className="add-movie-button" src={plusSign}></img>
      <p className="add-movie-text">Add Movie...</p>
    </div>
  )
  
}

export default AddMovie