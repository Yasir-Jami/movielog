import "@styles/AddMovie.css";
import { useState } from "react";
import { Plus } from "lucide-react";

enum AddMovieModalDisplay {
    Invisible="add-movie__modal",
    Visible="add-movie__modal--active"
  };

enum ModalTypes {
    Default="add-movie__modal-content--default",
    Custom="add-movie__modal-content--custom"
  };

function AddMovie() {
  const [modalVisibility, setModalVisibility] = useState<AddMovieModalDisplay>(AddMovieModalDisplay.Invisible);
  const [modalType, setModalType] = useState<ModalTypes>(ModalTypes.Default);

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
          <form className="add-movie-modal__form">
            <input className="add-movie-modal__search" name="movie-title" placeholder="Search for a movie..."/>
          </form>
        </div>
      )
    }

    // Custom movie display
    else if (modalType == ModalTypes.Custom) {
      modalContent = (
        <div className={modalType}>
          <form className="add-movie-modal__form">
            <p>Search for a title</p>
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