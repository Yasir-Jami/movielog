import plusSign from "/src/assets/svgs/plus-1469-svgrepo-com.svg"
import "/src/styles/MovieList.css"
import { useState } from "react";
import { UseAuth, AuthContextType } from "../AuthContext";

interface CreateListData {
  listName: string,
  email: string,
}

async function createNewList(listName: string, userProps: AuthContextType) {
  const {user, isAuthenticated} = userProps;
  const url = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_MOVIE_LISTS}${import.meta.env.VITE_API_CREATE_LIST}`;

  if (user && isAuthenticated) {
    const newData: CreateListData = {
      listName: listName,
      email: user.email,
    }
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newData),
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
  }
  else {
    logger.error("Could not retrieve user.");
  }
}

function AddMovieList(){ 
  const userAuth = UseAuth();
  const [hovering, setHovering] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [listName, setListName] = useState('');

  // TODO: either do loading spinner where create new list container is or do viewport-centered loading spinner
  return(
    <div>
      {/* Modal */}
      {modalVisible && (
      <div className="create-new-list-modal">
        <div className="modal-content">
          <p>Create a New List</p>
          <span className="close" onClick={() => setModalVisible(false)}>&times;</span>
          <label>List Name</label>
          <input 
          type="text" 
          value={listName}
          onChange={(e) => setListName(e.target.value)}></input>
          <button onClick={() => createNewList(listName, userAuth)}>Create</button>
        </div>
      </div>
      )}

      {/* Create list */}
      {!modalVisible && (
      <div className="create-list-container">
        <img 
          className="create-list-button"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onClick={() => setModalVisible(true)}
          src={plusSign}>
        </img>
        <p 
          className={`create-list-text ${hovering ? `hovered` : ''}`}
        >
          Create a new list...</p>
      </div>
    )}
      
    </div>
    
  );
}

export default AddMovieList