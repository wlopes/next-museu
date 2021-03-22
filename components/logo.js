//CSS
import styles from '../styles/main.module.css'

function Logo() {
    return <div className={styles.siteLogo}>
        <a href="/" className="custom-logo-link">
            <img src="https://museudapessoa.org/wp-content/uploads/2020/06/cropped-miniguideweb_MUSEUDAPESSOA2020-4.png" />
        </a>
    </div>
  }
  
  export default Logo