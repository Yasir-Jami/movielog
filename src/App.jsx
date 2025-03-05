import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import MovieCard from "./MovieCard.jsx"

function App() {
  return(
    <>
      <Header />
      <MovieCard 
        movieName="Paddle"
        movieTitleColor="#b87333" 
        movieDescription="Two-player web game made with HTML and JavaScript. 
        Play the game by hitting the ball past your opponent's paddle. 
        The winner is the one who scores 9 goals first."
        movieImage="/portfolio-website/src/assets/paddle.png"
      />
      <MovieCard 
        movieName="ShiftSmart" 
        movieTitleColor="#b87333" 
        movieDescription="A Java mobile application used to schedule shifts for employees. 
        Developed in a four-person team while following Agile methodology for movie management."
        movieImage="/portfolio-website/src/assets/ShiftSmart.png"
      />
      <MovieCard 
        movieName="Linux Process Simulator" 
        movieTitleColor="#b87333"
        movieDescription="Program that simulates the queueing and running of processes on Unix-like systems. 
        A log file recording the execution is used to generate an image like the one below."
        movieImage="/portfolio-website/src/assets/ProcessSimulatorGraph.png"
      />
      <Footer />
    </>
  );
}

export default App