import "@styles/index.css";
import { MainContentTab } from "types";
import { useState } from "react";
import Header from "@components/ui/Header";
import Sidebar from "@components/ui/Sidebar";
import MainContent from "@components/ui/MainContent";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<MainContentTab>(MainContentTab.Home);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

 return (
  <>
  <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
  <div className="home-page">
    <Sidebar onSelectTab={setSelectedTab} selectedTab={selectedTab} setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
    <MainContent selectedTab={selectedTab}/>
  </div>
  </>
  )
}