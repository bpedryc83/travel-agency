import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import styles from './DrawTripInList.module.scss';
import { IMGS_URL } from "../../../config";

const DrawTripInList = props => <div className={`mb-4 ${styles.tripRow}`}>
  <div className={`text-start ${styles.pictureColumn}`}>
    <img className={styles.thumbnails} src={IMGS_URL + props.mainPhoto} alt={props.title}/>
  </div>

  <div className={`${styles.descriptionColumn}`}>
    <div className={`${styles.title}`}>{props.title}</div>
    <div className={`fw-bold align-items-end ${styles.country}`}>Country: <span className="fw-normal">{props.country}</span></div>
  </div>

  <div className={`${styles.readMoreColumn}`}>
    <div className={styles.readMore}>
      <Nav.Link as={Link} key={props.id} to={"/trips/" + props.id} className={`${styles.navStyle}`} >Read more...</Nav.Link>
    </div>
  </div>
</div>

export default DrawTripInList;