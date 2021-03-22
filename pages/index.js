//components
import LOGO from "../components/logo";
import HomeSlide1 from "../slides/homeSlide1"
import HomeSlide2 from "../slides/homeSlide2"

//CSS
import styles from '../styles/main.module.css'

function HomePage() {
    return <>
    <LOGO></LOGO>
    <div className={styles.mainPageContent}>
        <HomeSlide1></HomeSlide1>
        <HomeSlide2></HomeSlide2>
    </div>
    <style jsx global>{`
        body {
          margin: 0;
        }        
      `}</style>
    </>
  }
  
  export default HomePage