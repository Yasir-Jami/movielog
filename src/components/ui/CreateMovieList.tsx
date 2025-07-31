import styles from "@styles/CreateMovieList.module.css";
import addListIcon from "/src/assets/svgs/plus-mini-1523-svgrepo-com.svg";
import { useEffect, useState, useId } from "react";

function createNewList(listName: string) {
  const url = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_MOVIE_LISTS}${import.meta.env.VITE_API_CREATE_LIST}`;

    useEffect(() => {
      const storeNewList = async () => {
        await fetch(url, {
          method: "GET",
          headers: {

          },
        });

      }
      
      storeNewList();
    });
    /*
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newListData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        logger.error("Error:", errorData);
        return;
      }

      else if (response.ok) {
        // Create a new list
        logger.log("Creating new list", listName);
      }

      else {
        logger.log("Server returned an invalid response.")
      }
    }
    catch (err) {
      logger.log("Error:", err); 
    }
      */
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

      console.log(createListClassName);
  
      return (
        <div className={styles[createListClassName]}>
          <div className={styles["create-movie-list__modal-container"]}>
            <h3 className={styles["create-movie-list__modal-header"]}>Create New List</h3>
            <form className={styles["create-movie-list__form"]}>
              <input 
              className={styles["create-movie-list-modal__input"]} 
              name="list-name"
              placeholder="List Name" 
              id={id}
              onChange={e => setListNameInput((e.target as HTMLInputElement).value)}>
              </input>
              <div className={styles["create-movie-list__modal-buttons"]}>
                <span 
                className={styles["create-movie-list__modal-close-button"]}
                onClick={() => {setisModalVisible(false); setIsButtonVisible(true);}}>
                  Cancel
                </span>
                <span 
                className={styles["create-movie-list__modal-add-button"]} 
                onClick={() => {createNewList(listNameInput); setIsButtonVisible(true);}}>Create</span>
              </div>
            </form>
          </div>
        </div>
      )
    }

  return (
    <div className={styles["create-movie-list"]}>
      <div className={styles[buttonVisible]} onClick={() => {setIsButtonVisible(false); setisModalVisible(true)}}>
        <img className={styles["create-movie-list-icon"]} src={addListIcon}></img>
      </div>
      <CreateMovieListModal/>
    </div>
  )
}

export default CreateMovieList;