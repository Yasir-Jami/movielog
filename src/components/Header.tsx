import "/src/styles/Header.css"
import clapperboardlogo from "/src/assets/clapperboard.png"

function Header(){
  return (
    <div className="header">
    <img src={clapperboardlogo} alt="main-logo" className="logo"></img>
    <h1>movielog</h1>
      <li>Home</li>
      <li>Movies</li>
      <li>About</li>
    </div>
  )
}

export default Header