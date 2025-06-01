import "/src/styles/Header.css"
import User from "./User.tsx"

function Header(){
  return (
    <div className="header">
      <a href="/"><p className="header-title">movielog</p></a>
        <ul className="header-container">
          <a href="/"><li>Home</li></a>
          <a href="/movies"><li>Movies</li></a>
          <a href="/favorites"><li>Favorites</li></a>
        </ul>
        <User />
    </div>
  )
}

console.log(User.name);

export default Header