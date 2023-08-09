import styles from './AddToCart.module.scss';
import { useState } from 'react';
import { saveTripInCart } from '../../../redux/cartThunks';
import { useDispatch } from 'react-redux'; 
import SetAmount from '../setAmount/SetAmount';


const AddToCart = props => {

  const [peopleAmount, setPeopleAmount] = useState(1);
  const dispatch = useDispatch();

  const addTriptoCart = (e, tripId, peopleAmount) => {
    e.preventDefault();
    dispatch(saveTripInCart( tripId, peopleAmount ));
  }

  return (
    <div>
      <div className={`${styles.header}`}>
        SELECT NUMBER OF PEOPLE
      </div>

      <SetAmount peopleAmount = { peopleAmount } setPeopleAmount = { setPeopleAmount } maxPeopleAmount = { props.maxPeopleAmount }/>

      <div className='mt-2'>
        <span className={`${styles.totalAmount}`}>Total price: <span className='fw-bold'>{props.price * peopleAmount}</span> PLN </span> 
      </div>

      <div className={`${styles.button}`} onClick={e => addTriptoCart(e, props.tripId, peopleAmount)}>
        ADD TO CART
      </div>
    </div>
  )
}

export default AddToCart;