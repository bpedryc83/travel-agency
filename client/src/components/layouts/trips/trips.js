import { getAllTrips } from "../../../redux/tripsRedux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState, useEffect } from "react";
import styles from './trips.module.scss';
import DrawTripsGrid from "../../features/drawTripsGrid/DrawTripsGrid";


const Trips = () => {

  const [allTrips, setAllTrips] = useState('');

  const loadedData = useSelector(getAllTrips);
  useEffect(() => {
    setAllTrips(loadedData);
    // if(loadedData){
    //   setisLoading(false);
    // }
  }, [loadedData]);

  return (
    <div>
      <div className={`${styles.offerHeader}`}>
        CURRENT OFFER
      </div>
      <div className={`${styles.mainGrid}`}>
        {allTrips && <DrawTripsGrid tripsToDraw = { allTrips } />}
      </div>
    </div>
  )
}

export default Trips;