import styles from './DrawTripsGrid.module.scss';
import DrawTripInList from '../drawTripInList/DrawTripInList';

const DrawTripsGrid = props => <div className={`pt-3 ${styles.gridContainer}`}>
    {props.tripsToDraw.map(trip => <DrawTripInList key={trip.id} { ...trip }/>)}
  </div>

export default DrawTripsGrid;