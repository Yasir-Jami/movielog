import MainContent from "@components/ui/MainContent";
import Header from '@components/ui/Header';
import "@styles/index.css";

export default function Home() {
  //const [isReady, setIsReady] = useState(false);

  /*
  if (!isReady) {
    return(
      <div className="loading">Loading...</div>
    )
  }

  else if (isReady) {
  */
 return (
  <div>
  <Header/>
  <MainContent />
  </div>
  )
}