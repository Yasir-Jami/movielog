
import plusSign from "/public/svgs/plus-1455-svgrepo-com.svg"

function AddMovie () {
  return(
    <div>
      <img className="add-button" src={plusSign}></img>
      <p className="add-movie-text">Add Movie...</p>
    </div>
  )
}


export default AddMovie