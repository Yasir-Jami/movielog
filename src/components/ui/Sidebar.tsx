import "/src/styles/Sidebar.css"
import { SidebarProps, SidebarItemProps } from "interfaces.ts";
import playButtonIcon from "/src/assets/svgs/play-button.svg";
import checkmarkIcon from "/src/assets/svgs/checkmark-svgrepo-com.svg";
import clockIcon from "/src/assets/svgs/clock-svgrepo-com.svg";

import { useState } from "react";

function Sidebar() {
  const [sidebarVisiblity, setSidebarVisiblity] = useState<Boolean>(true);
  const selectedListId: number = 0;

  function toggleSidebar() {
    //setSidebarVisiblity(sidebarVisiblity => !sidebarVisiblity);
    
  }

  function retrieveLists() {


  }

  function selectList(id: number) {
    // Highlight selected list by ID

    
  }

  const SideBarItem = (props: SidebarItemProps) => {
    const {itemLabel, itemIcon}: SidebarItemProps = props;
    
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
      itemIcon:  playButtonIcon,
    }

    const watchedListProps: SidebarItemProps = {
      itemLabel: "Watched",
      itemIcon:  checkmarkIcon,
    }

    const watchLaterListProps: SidebarItemProps = {
      itemLabel: "Watch Later",
      itemIcon:  clockIcon,
    }

    return (
      <div className="sidebar__list">
        <SideBarItem {...watchingListProps}/>
        <SideBarItem {...watchedListProps}/>
        <SideBarItem {...watchLaterListProps}/>
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