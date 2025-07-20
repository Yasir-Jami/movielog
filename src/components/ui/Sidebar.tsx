import "/src/styles/Sidebar.css"

function Sidebar() {

  const SidebarLists = () => {
    // Get number of lists from database
    // Display appropriately

    return (
      <div className="sidebar__container-list">
        {/* Get each list node
        
        {[...Array(movieCount)].map((_, i) => (
          <MovieNode key={i} movieInfo={movieInfo} />
        ))}
        */}
        <div className="sidebar__container-item"></div>
        <div className="sidebar__container-add-list-item"></div>
      </div>
    )
  }

  return (
    <div className="sidebar">
      <p className="sidebar__container-label">My Lists</p>
      <div className="sidebar__container">
        <SidebarLists/>
      </div>
    </div>
  );
}

export default Sidebar;