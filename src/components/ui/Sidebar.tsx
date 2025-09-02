import styles from "@styles/Sidebar.module.css";
import CreateMovieList from "@components/ui/CreateMovieList";
import { SidebarItemProps } from "types";
import { useState } from "react";
import playButtonIcon from "/src/assets/svgs/play-button.svg";
import checkmarkIcon from "/src/assets/svgs/checkmark-svgrepo-com.svg";
import clockIcon from "/src/assets/svgs/clock-svgrepo-com.svg";
import sidebarChevron from "/src/assets/svgs/left-chevron.svg";

interface SidebarProps {
  onSelectList: React.Dispatch<React.SetStateAction<string>>;
  selectedListName: string,
}

function Sidebar({onSelectList, selectedListName}: SidebarProps) {
  const [sidebarActive, setSidebarActive] = useState<boolean>(true);
  const [sidebarButton, setSidebarButton] = useState<boolean>(true);

  const SideBarItem = (props: SidebarItemProps) => {
    const {itemLabel, itemIcon}: SidebarItemProps = props;
    const sidebarStyle = 
    itemLabel == selectedListName 
    ? styles["sidebar__item--selected"]
    : styles.sidebar__item;
    
    return (
      <div className={sidebarStyle} onClick={() => {onSelectList(itemLabel)}}>
          <img className={styles["sidebar__item-icon"]} src={itemIcon}/>
          <p className={styles["sidebar__item-label"]}>{itemLabel}</p>
      </div>
    )
  }

  const SidebarLists = () => {
    const watchingListProps: SidebarItemProps = {
      itemId: 0,
      itemLabel: "Watching",
      itemIcon:  playButtonIcon,
    }

    const watchedListProps: SidebarItemProps = {
      itemId: 1,
      itemLabel: "Watched",
      itemIcon:  checkmarkIcon,
    }

    const watchLaterListProps: SidebarItemProps = {
      itemId: 2,
      itemLabel: "Watch Later",
      itemIcon:  clockIcon,
    }

    const defaultListProps: SidebarItemProps[] = [watchingListProps, watchedListProps, watchLaterListProps];

    // Get custom lists
    /*
    useEffect(() => { 
      async function getCustomLists() {
        const lists = await RetrieveMovieLists();
        setListData(lists);
      }
      
      getCustomLists();
    }, []);

    const customListProps: SidebarItemProps[] = listData.map((list, index) => ({
      itemId: index + 3,
      itemLabel: list.listName,
      itemIcon: undefined,
    }));

    logger.log(customListProps);
    */

    return (
      <div className={styles.sidebar__list}>
        {[...Array(defaultListProps.length)].map((_, i) => (
          <SideBarItem key={i} {...defaultListProps[i]}/>
        ))}

        {/* 
        {[...Array(customListProps.length)].map((_, i) => (
          <SideBarItem key={i} {...customListProps[i]} />
        ))}
        */}
        
        {/*<CreateMovieList />*/}
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

  function sidebarButtonStatus(): string {
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