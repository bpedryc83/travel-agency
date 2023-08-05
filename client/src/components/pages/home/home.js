import { Container } from "react-bootstrap";
import styles from './home.module.scss';
import MainPicture from "../../layouts/mainPicture/mainPicture";
import AgencyInfo from "../../layouts/agencyInfo/agencyInfo";

const Home = () => {
  return (
    <Container className={`d-flex align-items-center justify-content-center`}>
      <div className={`d-flex ${styles.mainGrid}`}>
        <div className={`${styles.leftColumn}`}>
          <div className={`d-flex ${styles.sentence}`}>
            <div className="d-flex align-items-end"> 
              WITH US YOU WILL FIND THE SPIRIT OF THE MOUNTAIN
            </div>
          </div>

          <div className={`${styles.aboutUs}`}>
            <AgencyInfo />
          </div>
        </div>
    
        <div className={`${styles.rightColumn}`}>
          <MainPicture />
        </div>
      </div>
    </Container>
  )
}

export default Home;