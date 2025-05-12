import "/src/styles/Header.css"
import clapperboardlogo from "/src/assets/clapperboard-transparent.png"

function Header(){
  return (
    <div className="header">
      <img src={clapperboardlogo} className="logo" alt="main-logo" ></img>
      <h1 className="header-title">movielog</h1>
      <li>Home</li>
      <li>Movies</li>
      <button>Sign Up</button>
      <button>Sign In</button>
    </div>
  )
}

export default Header