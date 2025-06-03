import "/src/styles/Header.css"
import User from "./User.tsx"

function Header(){
  return (
    <div className="header">
      <a href="/"><p className="header-title">movielog</p></a>
        <ul>
          <a href="/"><li>Home</li></a>
          <a href="/movies"><li>Movies</li></a>
          <a href="/favorites"><li>Favorites</li></a>
        </ul>
        <User />
    </div>
  )
}

export default Header