import "/src/styles/Header.css"
import clapperboard from "/src/assets/svgs/clapperboard.svg"
import User from "./User.tsx"

function Header(){
  return (
    <div className="header">
      <img src={clapperboard}/>
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