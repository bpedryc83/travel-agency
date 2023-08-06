import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import styles from './SingleTrip.module.scss';
//import { getAnnouncementById } from "../../../redux/announcementsRedux";

const SingleTrip = () => {
  const [singleTrip, setSingleTrip] = useState('');
  const tripParams = useParams();

  return (
    <Container className={`d-flex align-items-center justify-content-center`}>
      <div className={`d-flex ${styles.mainGrid}`}>
        {tripParams.id}
      </div>
    </Container>
  )
}

export default SingleTrip;