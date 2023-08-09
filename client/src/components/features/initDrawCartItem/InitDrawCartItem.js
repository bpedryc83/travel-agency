import { getTripById } from '../../../redux/tripsRedux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import styles from './InitDrawCartItem.module.scss';
import DrawCartItem from '../drawCartItem/DrawCartItem';

const InitDrawCartItem = props => {
  
  const cartTripsIds = props.cartItems.map(item => item.tripId);

  const cartTrips = useSelector(state => {
    return cartTripsIds.map(tripId => getTripById(state, tripId));
  });

  const cartItemsTripData = props.cartItems.map(cartItem => {
    const matchingTrip = cartTrips.find(trip => trip.id === cartItem.tripId);
    return {
      ...cartItem,
      title: matchingTrip.title,
      price: matchingTrip.price,
      country: matchingTrip.country,
      mainPhoto: matchingTrip.mainPhoto,
      maxPeopleAmount: matchingTrip.maxPeopleAmount
    }
  });

  return (
    <div className={`d-flex ${styles.mainGrid}`}>
      {cartItemsTripData.map(cartItemTripData => 
        <DrawCartItem cartItemTripData = { cartItemTripData } key={`${cartItemTripData.tripId}`} />
      )}
    </div>
  )
}

export default InitDrawCartItem;