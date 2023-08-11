import { getTripById } from '../../../redux/tripsRedux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import styles from './InitDrawCartItem.module.scss';
import DrawCartItem from '../drawCartItem/DrawCartItem';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { saveTempOrder } from '../../../redux/orderThunks';

const InitDrawCartItem = props => {
  const dispatch = useDispatch();

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
      remarks: ''
    }
  });

  const totalPrice = useMemo(() => {
    return cartItemsTripData.reduce((total, current)=>{return total + (current.price * current.peopleAmount)}
    , 0);
  }, [cartItemsTripData]);

  const saveUnconfirmedOrder = () => {
    dispatch(saveTempOrder(cartItemsTripData));
  } 

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
      {cartItemsTripData.length>0 &&
        <Nav.Link className="p-0" as={Link} to="confirmation">
          <div className={`${styles.confirmation}`} onClick={saveUnconfirmedOrder}>
            GO TO ORDER CONFIRMATION
          </div>
        </Nav.Link>
      } 
    </div>
  )
}

export default InitDrawCartItem;