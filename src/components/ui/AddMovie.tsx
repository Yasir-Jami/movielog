import "@styles/AddMovie.css";
import AddMovieSearch from "@components/ui/AddMovieSearch";
import { AddMovieModalDisplay } from "types";
import { MovieInfo, MovieList } from "types";
import { useState } from "react";
import { Plus } from "lucide-react";

interface AddMovieProps {
  modalVisibility: AddMovieModalDisplay,
  setModalVisibility: React.Dispatch<React.SetStateAction<AddMovieModalDisplay>>,
  currentMovieList: MovieList,
  updateCurrentList: () => Promise<void>,
}

enum ModalTypes {
    Default="add-movie__modal-content--default",
    Custom="add-movie__modal-content--custom"
};

async function addMovieToList(
  movie: MovieInfo, 
  movieList: MovieList, 
  updateCurrentList: () => Promise<void>) {
  const url = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_MOVIE_LISTS}${import.meta.env.VITE_API_ADD_MOVIE}`;
  
  await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify( { movie: movie, listName: movieList.listName } ),
  })
  .then(res => res.json())
  .then(data => {
    logger.log(data);
    updateCurrentList();
  })
  .catch(err => logger.error("Error:", err)); 
}

function AddMovie({modalVisibility, setModalVisibility, currentMovieList, updateCurrentList}: AddMovieProps) {
  const [modalType, setModalType] = useState<ModalTypes>(ModalTypes.Default);

  const handleMovieSelection = (selectedMovie: MovieInfo) => {
    addMovieToList(selectedMovie, currentMovieList, updateCurrentList);
  }

  function AddMovieModal() {
    let modalVisible = modalVisibility;
    let modalDisplayType = modalType;

    return (
      <div className={modalVisible}>
        <ModalToDisplay modalType={modalDisplayType}/>
      </div>
    )
  }

  function ModalToDisplay({ modalType } : { modalType: ModalTypes } ): React.JSX.Element {
    let modalContent: React.JSX.Element = <></>;

    // Default display
    if (modalType == ModalTypes.Default) {
      modalContent = (
        <div className={modalType}>
          <AddMovieSearch setModalVisibility={setModalVisibility} onMovieSelect={handleMovieSelection}/>
        </div>
      )
    }

    // Custom movie display
    else if (modalType == ModalTypes.Custom) {
      modalContent = (
        <div className={modalType}>
          <form className="add-movie-modal__form">
            <p>Title</p>
            <p>Year</p>
            <p>Genre</p>
          </form>
        </div>
      )
    }

    return(
      <div className="add-movie__modal-container">
        <h3 className="add-movie__modal-header">Add New Movie</h3>
        <span 
          className="add-movie__modal-default-tab" 
          onClick={() => {setModalType(ModalTypes.Default)}}>
        </span>
        <span
          className="add-movie__modal-custom-tab" 
          onClick={() => {setModalType(ModalTypes.Custom)}}>
        </span>
        {modalContent}
        <div className="add-movie__modal-buttons">
          <span 
          className="add-movie__modal-close-button"
          onClick={() => setModalVisibility(AddMovieModalDisplay.Invisible)}>
            Cancel
          </span>
          <span className="add-movie__modal-add-button">Add</span>
        </div>
      </div>
    )
}

  return (
    <div className="add-movie">
      <AddMovieModal />
      <div className="add-movie__button" onClick={() => {setModalVisibility(AddMovieModalDisplay.Visible)}}>
        <Plus className="add-movie__plus-sign"/>
        <p className="add-movie__text">Add Movie</p>
      </div>
    </div>
  )
}

export default AddMovie;