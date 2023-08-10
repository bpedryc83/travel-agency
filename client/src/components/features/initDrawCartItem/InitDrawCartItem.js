import { getTripById } from '../../../redux/tripsRedux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useMemo } from 'react';
import styles from './InitDrawCartItem.module.scss';
import DrawCartItem from '../drawCartItem/DrawCartItem';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      maxPeopleAmount: matchingTrip.maxPeopleAmount,
    }
  });

  const totalPrice = useMemo(() => {
    return cartItemsTripData.reduce((total, current)=>{return total + (current.price * current.peopleAmount)}
    , 0);
  }, [cartItemsTripData]);

  return (
    <div>
      <div className={`d-flex ${styles.mainGrid}`}>
        {cartItemsTripData.map(cartItemTripData => 
          <DrawCartItem cartItemTripData = { cartItemTripData } totalPrice = {totalPrice} key={`${cartItemTripData.tripId}`} />
        )}
      </div>
      <div className={`${styles.totalPrice}`}>
        TOTAL PRICE FOR CART: {totalPrice} PLN
      </div>
      <Nav.Link className="p-0" as={Link} to="confirmation">
        <div className={`${styles.confirmation}`}>
          GO TO ORDER CONFIRMATION
        </div>
      </Nav.Link>
    </div>
  )
}

export default InitDrawCartItem;