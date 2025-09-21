import styles from "@styles/Sidebar.module.css";
import User from "@components/ui/User";
import { MainContentTab, SidebarTabProps } from "types";
import { useState } from "react";
import { House, List, Settings, NotepadText } from "lucide-react";

interface SidebarProps {
  selectedTab: MainContentTab,
  onSelectTab: React.Dispatch<React.SetStateAction<MainContentTab>>;
  sidebarOpen: boolean,
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

function Sidebar({onSelectTab, selectedTab}: SidebarProps) {
  const [sidebarActive, setSidebarActive] = useState<boolean>(true);
  const [sidebarButton, setSidebarButton] = useState<boolean>(false);

  const SideBarItem = (props: SidebarTabProps) => {
    const {itemLabel, itemIcon}: SidebarTabProps = props;
    const sidebarStyle = 
    itemLabel == selectedTab 
    ? styles["sidebar__item.hidden"]
    : styles.sidebar__item;

    console.log("Selected tab:", selectedTab);
    console.log("Sidebar style:", sidebarStyle);
    
    return (
      <div className={sidebarStyle} onClick={() => {onSelectTab(itemLabel)}}>
        {itemIcon}
        <p className={styles["sidebar__label"]}>{itemLabel}</p>
      </div>
    )
  }

  const SidebarTabs = () => {
    const homeTab: SidebarTabProps = {
      itemId: 0,
      itemLabel: MainContentTab.Home,
      itemIcon: <House className={styles.sidebar__icon}/>,
    }

    const listsTab: SidebarTabProps = {
      itemId: 1,
      itemLabel: MainContentTab.Lists,
      itemIcon: <List className={styles.sidebar__icon}/>,
    }

    const reviewsTab: SidebarTabProps = {
      itemId: 2,
      itemLabel: MainContentTab.Reviews,
      itemIcon: <NotepadText className={styles.sidebar__icon}/>,
    }

    const settingsTab: SidebarTabProps = {
      itemId: 3,
      itemLabel: MainContentTab.Settings,
      itemIcon: <Settings className={styles.sidebar__icon}/>,
    }

    const sidebarTabProps: SidebarTabProps[] = [homeTab, listsTab, reviewsTab, settingsTab];

    return (
      <div className={styles.sidebar__list}>
        {[...Array(sidebarTabProps.length)].map((_, i) => (
          <SideBarItem key={i} {...sidebarTabProps[i]}/>
        ))}
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
      <div className={styles.sidebar__container}>
        <SidebarTabs />  
        <User/>
      </div>
    </div>
  );
}

export default Sidebar;