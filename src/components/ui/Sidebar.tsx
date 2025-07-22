import "/src/styles/Sidebar.css"
import { SidebarProps, SidebarItemProps } from "src/interfaces.ts";
import { useState } from "react";

function Sidebar() {
  const [sidebarVisiblity, setSidebarVisiblity] = useState(true);
  //const { selectedList } = props;

  function toggleSidebar() {
    setSidebarVisiblity(sidebarVisiblity => !sidebarVisiblity);
  }

  function retrieveLists() {


  }

  function selectList() {
    // Highlight selected list by ID
    
  }

  const SideBarItem = (props: SidebarItemProps) => {
    const {itemLabel, itemIcon} = props;
    
    return (
      <div className="sidebar__item">
        <img className="sidebar__item-icon" src={itemIcon}/>
        <p className="sidebar__item-label">{itemLabel}</p>
      </div>
    )
  }

  const SidebarLists = () => {
    const watchingListProps: SidebarItemProps = {
      itemLabel: "Watching",
      itemIcon:  "/src/assets/svgs/play-button.svg"
    }

    const watchedListProps: SidebarItemProps = {
      itemLabel: "Watched",
      itemIcon:  "/src/assets/svgs/checkmark-svgrepo-com.svg"
    }

    const toWatchListProps: SidebarItemProps = {
      itemLabel: "To Watch",
      itemIcon:  "/src/assets/svgs/clock-svgrepo-com.svg"
    }

    return (
      <div className="sidebar__list">
        <SideBarItem {...watchingListProps}/>
        <SideBarItem {...watchedListProps}/>
        <SideBarItem {...toWatchListProps}/>
        {/* 
        Get each list from database
        {[...Array(movieCount)].map((_, i) => (
          <SideBarItem key={i} {listName} />
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