import "/src/styles/Sidebar.css"
import { useState } from "react";

function Sidebar() {
  const [sidebarVisiblity, setSidebarVisiblity] = useState(true);

  function toggleSidebar() {
    setSidebarVisiblity(sidebarVisiblity => !sidebarVisiblity);
    

  }

  function retrieveLists() {


  }

  const SideBarItem = () => {
    return (
      <div className="sidebar__item">
        <img className="sidebar__item-icon" src="/src/assets/svgs/play-button.svg"/>
        <p className="sidebar__item-name">Watching</p>
      </div>
    )

  }

  const SidebarLists = () => {
    // Get number of lists from database
    // Display appropriately

    return (
      <div className="sidebar__list">
        <SideBarItem />
        {/* Get each list node
        {[...Array(movieCount)].map((_, i) => (
          <SideBarItem key={i} listName={listName} />
        ))}
        */}
        <div className="sidebar__add-item">
          <img className="sidebar__add-item-plus-sign" src="/src/assets/svgs/plus-mini-1523-svgrepo-com.svg"></img>
        </div>
      </div>
    )
  }

  return (
    <div className="sidebar">
      <img 
      className="sidebar__chevron" 
      src="/src/assets/svgs/left-chevron.svg"
      onClick={toggleSidebar}
      />
      <div className="sidebar__container">
        <p className="sidebar__label">My Lists</p>
        <SidebarLists/>
      </div>
    </div>
  );
}

export default Sidebar;