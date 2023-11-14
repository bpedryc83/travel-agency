import { Container } from "react-bootstrap";
import styles from './home.module.scss';
import MainPicture from "../../layouts/mainPicture/mainPicture";
import AgencyInfo from "../../layouts/agencyInfo/agencyInfo";
import Trips from "../../layouts/trips/trips";

const Home = () => {
  return (
    <div>
      <Container className={`d-flex align-items-center justify-content-center`}>
        <div className={`d-flex ${styles.mainGrid}`}>
          <div className={`${styles.leftColumn}`}>
            <div className={`d-flex ${styles.sentence}`}>
              WITH US YOU WILL FIND THE SPIRIT OF THE MOUNTAIN
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
      <Container>
        <Trips />
      </Container>
    </div>
  )
}

export default Home;