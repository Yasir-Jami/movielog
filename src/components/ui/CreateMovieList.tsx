import styles from "@styles/CreateMovieList.module.css";
import addListIcon from "/src/assets/svgs/plus-mini-1523-svgrepo-com.svg";
import { useState, useId } from "react";

async function createNewList(listName: string) {
  //const url = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_MOVIE_LISTS}${import.meta.env.VITE_API_CREATE_LIST}`;
  const url = `${import.meta.env.VITE_API_LOCAL_URL}${import.meta.env.VITE_API_MOVIE_LISTS}${import.meta.env.VITE_API_CREATE_LIST}`;
  
  await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify( { listName: listName } ),
  })
  .then(res => res.json())
  .then(data => {
    console.log("New list created:", data);
  })
    .catch(err => logger.error("Error:", err));
}

function CreateMovieList() {
  const [isModalVisible, setisModalVisible] = useState<boolean>(false);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true);
  const buttonVisible: string = isButtonVisible ? "create-movie-list__button" : "create-movie-list__button--hidden";
  
    function CreateMovieListModal() {
      const [listNameInput, setListNameInput] = useState('create-movie-list-modal');
      const id = useId();
      
      let modalVisible = isModalVisible;
      let createListClassName: string = modalVisible ? "create-movie-list-modal" : "create-movie-list__modal--hidden";
  
      return (
        <div className={styles[createListClassName]}>
          <div className={styles["create-movie-list__modal-container"]}>
            <h3 className={styles["create-movie-list__modal-header"]}>Create New List</h3>
            <form className={styles["create-movie-list__form"]}>
              <input 
              className={styles["create-movie-list-modal__input"]} 
              name="list-name"
              placeholder="List name"
              id={id}
              onChange={e => setListNameInput((e.target as HTMLInputElement).value)}>
              </input>
              <div className={styles["create-movie-list__modal-buttons"]}>
                <span 
                className={styles["create-movie-list__modal-close-button"]}
                onClick={() => {showButton()}}>
                  Cancel
                </span>
                <span 
                className={styles["create-movie-list__modal-add-button"]} 
                onClick={() => {createNewList(listNameInput); showButton()}}>Create</span>
              </div>
            </form>
          </div>
        </div>
      )
    }

    function showModal(): void {
      setisModalVisible(true);
      setIsButtonVisible(false);
    }

    function showButton(): void {
      setisModalVisible(false);
      setIsButtonVisible(true);
    }

  return (
    <div className={styles["create-movie-list"]}>
      <div className={styles[buttonVisible]} onClick={() => {showModal()}}>
        <img className={styles["create-movie-list-icon"]} src={addListIcon}></img>
      </div>
      <CreateMovieListModal/>
    </div>
  )
}

export default CreateMovieList;