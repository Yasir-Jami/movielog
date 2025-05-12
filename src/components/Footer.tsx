import "/src/styles/Footer.css"
import github_logo from "/src/assets/github-mark.svg"

function Footer(){
  return (
    <footer>
      Developed by Yasir Jami 
      <a href="https://github.com/Yasir-Jami"><img className="github-logo" src={github_logo}></img></a>
    </footer>
  )
}

export default Footer