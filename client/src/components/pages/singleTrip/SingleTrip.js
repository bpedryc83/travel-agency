import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import styles from './SingleTrip.module.scss';
import { getTripById } from "../../../redux/tripsRedux";
import { IMGS_URL } from "../../../config";
import DrawPhoto from "../../features/drawPhoto/DrawPhoto";
import AddToCart from "../../features/addToCart/AddToCart";

const SingleTrip = () => {
  const [singleTrip, setSingleTrip] = useState('');
  
  const tripParams = useParams();
  const loadedData = useSelector(state => getTripById(state, tripParams.id));

  useEffect (() => {
    if (loadedData) {
      setSingleTrip(loadedData);
    }
  }, [loadedData]);

  return (
    <div>
      {
        singleTrip && <Container className={`align-items-center justify-content-center`}>
          <div className={`${styles.row}`}>
            <div className={`d-flex ${styles.mainDiv}`}>
              <div className={`${styles.title}`}>{singleTrip.title}</div>
            </div>
          </div>

          <div className={`${styles.row}`}>
            <div className={`d-flex ${styles.grid}`}>
              <div className={`${styles.pictureColumn}`}>
                <img className={`${styles.image}`} src={IMGS_URL + singleTrip.mainPhoto} alt={singleTrip.title}></img>
              </div>

              <div className={`${styles.dataColumn}`}>
                <p className={`${styles.first}`}><span className="fw-bold">Country: </span><span>{singleTrip.country}</span></p>
                <p><span className="fw-bold">Duration: </span><span>{singleTrip.duration}</span></p>
                <p><span className="fw-bold">People in group (max): </span><span>{singleTrip.maxPeopleAmount}</span></p>
                <p className={`${styles.last}`}><span className="fw-bold">Price from: </span><span>{singleTrip.price} PLN</span></p>
                <div className="justify-content-center text-center pt-3">
                  <AddToCart maxPeopleAmount = { singleTrip.maxPeopleAmount } price = { singleTrip.price } />
                </div>
              </div>
            </div>

          </div>

          <div className={`pt-4 ${styles.line}`}></div>

          <div className={`${styles.row}`}>
            <div className={`d-flex ${styles.mainDiv}`}>
              <div className={`${styles.description}`}>{singleTrip.description}</div>
            </div>
          </div>

          <div className={`pt-1 ${styles.line}`}></div>

          <div className={`${styles.row}`}>
            <div className={`d-block ${styles.mainDiv}`}>
              <p className={`${styles.photosHeader}`}>More photos</p>
              <div>
                <DrawPhoto photosToDraw = { singleTrip.photos } />
              </div>
            </div>
          </div>
        </Container>
      } 
    </div>
  )
}

export default SingleTrip;