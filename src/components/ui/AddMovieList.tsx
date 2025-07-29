import styles from "@styles/Sidebar.module.css";
import addListIcon from "/src/assets/svgs/plus-mini-1523-svgrepo-com.svg";
import { getUserCookie } from "@components/Cookie";
import { useEffect, useState } from "react";

interface CreateListProps {
  cookie: () => void,
  listName: string,
}

function createNewList(listName: string) {
  const url = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_MOVIE_LISTS}${import.meta.env.VITE_API_CREATE_LIST}`;

    const newListData: CreateListProps = {
      cookie: getUserCookie,
      listName: listName
    }

    useEffect(() => {

    })
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

function AddMovieList() {
  return (
    <div className={styles["sidebar__add-item"]} onClick={() => {logger.log("clicked add-item")}}>
      <img className={styles["sidebar__add-item-plus-sign"]} src={addListIcon}></img>
    </div>
  )
}

export default AddMovieList;