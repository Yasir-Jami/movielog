import styles from "@styles/Sidebar.module.css"
import { SidebarItemProps } from "types";
import { useState } from "react";
import playButtonIcon from "/src/assets/svgs/play-button.svg";
import checkmarkIcon from "/src/assets/svgs/checkmark-svgrepo-com.svg";
import clockIcon from "/src/assets/svgs/clock-svgrepo-com.svg";
import sidebarChevron from "/src/assets/svgs/left-chevron.svg";
import CreateMovieList from "./CreateMovieList";

function Sidebar() {
  const [sidebarActive, setSidebarActive] = useState<boolean>(true);
  const [sidebarButton, setSidebarButton] = useState<boolean>(true);

  const SideBarItem = (props: SidebarItemProps) => {
    const {itemLabel, itemIcon}: SidebarItemProps = props;
    
    return (
      <div className={styles.sidebar__item}>
        <img className={styles["sidebar__item-icon"]} src={itemIcon}/>
        <p className={styles["sidebar__item-label"]}>{itemLabel}</p>
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
      <div className={styles.sidebar__list}>
        <SideBarItem {...watchingListProps}/>
        <SideBarItem {...watchedListProps}/>
        <SideBarItem {...watchLaterListProps}/>
        {/*
        {[...Array(listCount)].map((_, i) => (
          <SideBarItem key={i} {listName} />
        ))}
        */}
        
        <CreateMovieList />
      </div>
    )
  }

  function toggleSidebar() {
    setSidebarActive(prev => !prev);
    setSidebarButton(prev => !prev);
  }

  function sidebarStatus(): string {
    const style = sidebarActive ?  styles.sidebar : styles["sidebar--hidden"];
    return style;
  }

  function sidebarButtonStatus():string {
    const style = sidebarButton ? styles.sidebar__chevron : styles["sidebar__chevron--closed"];
    return style;
  }

  return (
    <div className={sidebarStatus()}>
      <img 
      className={sidebarButtonStatus()}
      src={sidebarChevron}
      onClick={() => {toggleSidebar()}}
      />
      <div className={styles.sidebar__container}>
        <p className={styles.sidebar__label}>My Lists</p>
        <SidebarLists />
      </div>
    </div>
  );
}

export default Sidebar;