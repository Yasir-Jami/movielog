import styles from "@styles/Sidebar.module.css";
import User from "@components/ui/User";
import { MainContentTab, SidebarTabProps } from "types";
import { List, Settings, NotepadText } from "lucide-react";
import React, { useEffect, useRef } from "react";

interface SidebarProps {
  selectedTab: MainContentTab,
  onSelectTab: React.Dispatch<React.SetStateAction<MainContentTab>>;
  sidebarOpen: boolean,
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

function Sidebar({selectedTab, onSelectTab, sidebarOpen, setSidebarOpen}: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const handleTabSelection = (itemLabel: MainContentTab) => {
    onSelectTab(itemLabel);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    setSidebarOpen(false);
  };

  useEffect(() => {
    function handleClickOutsideSearchBar(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    }
  
    document.addEventListener('mousedown', handleClickOutsideSearchBar);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideSearchBar);
    }
    }, []);

  const SidebarItem = (props: SidebarTabProps) => {
    const {itemLabel, itemIcon}: SidebarTabProps = props;
    const isSelected = itemLabel === selectedTab;
    let sidebarItemStyle = `${styles.sidebar__item} ${isSelected ? styles.selected : ""}`;
    
    return (
      <div className={sidebarItemStyle} onClick={() => {handleTabSelection(itemLabel)}}>
        {itemIcon}
        <p className={styles["sidebar__label"]}>{itemLabel}</p>
      </div>
    )
  }

  const SidebarTabs = () => {
    const listsTab: SidebarTabProps = {
      itemId: 0,
      itemLabel: MainContentTab.Lists,
      itemIcon: <List className={styles.sidebar__icon}/>,
    };

    const reviewsTab: SidebarTabProps = {
      itemId: 1,
      itemLabel: MainContentTab.Reviews,
      itemIcon: <NotepadText className={styles.sidebar__icon}/>,
    };

    const settingsTab: SidebarTabProps = {
      itemId: 2,
      itemLabel: MainContentTab.Settings,
      itemIcon: <Settings className={styles.sidebar__icon}/>,
    };

    const sidebarTabProps: SidebarTabProps[] = [listsTab, reviewsTab, settingsTab];

    return (
      <div className={styles.sidebar__list}>
        {[...Array(sidebarTabProps.length)].map((_, i) => (
          <SidebarItem key={sidebarTabProps[i].itemId} {...sidebarTabProps[i]}/>
        ))}
      </div>
    )
  }

  const sidebarStatus = (): string => {
    const sidebarStyle = `${styles.sidebar} ${sidebarOpen ? "" : styles.hidden}`;
    return sidebarStyle;
  }

  const sidebarOverlayStatus = (): string => {
    const sidebarStyle = `${styles["sidebar-overlay"]} ${sidebarOpen ? "" : styles["hidden-overlay"]}`;
    return sidebarStyle;
  }

  return (
    <div className={styles["sidebar-content"]}>
      <div className={sidebarStatus()} ref={sidebarRef}>
        <SidebarTabs/>
        <User/>
      </div>
      <div className={sidebarOverlayStatus()}></div>
    </div>
  );
}

export default Sidebar;