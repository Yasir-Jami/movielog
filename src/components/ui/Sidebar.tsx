import styles from "@styles/Sidebar.module.css";
import User from "@components/ui/User";
import { MainContentTab, SidebarTabProps } from "types";
import { House, List, Settings, NotepadText } from "lucide-react";

interface SidebarProps {
  selectedTab: MainContentTab,
  onSelectTab: React.Dispatch<React.SetStateAction<MainContentTab>>;
  sidebarOpen: boolean,
}

function Sidebar({selectedTab, onSelectTab, sidebarOpen}: SidebarProps) {
  const SideBarItem = (props: SidebarTabProps) => {
    const {itemLabel, itemIcon}: SidebarTabProps = props;
    const isSelected = itemLabel === selectedTab;
    const sidebarItemStyle = `${styles.sidebar__item} ${isSelected ? styles.selected : ""}`;
    
    return (
      <div className={sidebarItemStyle} onClick={() => {onSelectTab(itemLabel)}}>
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

  function sidebarStatus(): string {
    const sidebarStyle = `${styles.sidebar} ${sidebarOpen ? styles.hidden : ""}`;
    return sidebarStyle;
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