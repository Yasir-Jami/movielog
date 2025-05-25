import "/src/styles/Header.css"

function Header(){
  return (
    <div className="header">
      <div className="header-container">
        <h1 className="header-title">movielog</h1>
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/movies"><li>Movies</li></a>
            <a href="/lists"><li>Lists</li></a>
            <a href="/favorites"><li>Favorites</li></a>
          </ul>
      </div>
    </div>
  )
}

export default Header