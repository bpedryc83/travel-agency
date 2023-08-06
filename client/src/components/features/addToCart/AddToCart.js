import styles from './AddToCart.module.scss';
import { useState } from 'react';

const AddToCart = props => {

  const [peopleAmount, setPeopleAmount] = useState(1);

  const minusOne = (e) => {
    e.preventDefault();
    if (peopleAmount > 1) {
      setPeopleAmount(peopleAmount - 1);
    }
  }
  const plusOne = (e) => {
    e.preventDefault();
    if (peopleAmount < props.maxPeopleAmount) {
      setPeopleAmount(peopleAmount + 1);
    }
  }

  const addTriptoCart = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div className={`${styles.header}`}>
        SELECT NUMBER OF PEOPLE
      </div>

      <div className={`${styles.inputRow}`}>
        <span className={`${styles.minus}`} onClick={e => minusOne(e)} onMouseDown={e => e.preventDefault()}>-</span>
        <input value={peopleAmount} type="number" minLength="1" maxLength="2" min="1" max="20" className={`${styles.input}`} readOnly></input> 
        <span className={`${styles.plus}`} onClick={e => plusOne(e)} onMouseDown={e => e.preventDefault()}>+</span>
      </div>

      <div className='mt-2'>
        <span className={`${styles.totalAmount}`}>Total price: <span className='fw-bold'>{props.price * peopleAmount}</span> PLN </span> 
      </div>

      <div className={`${styles.button}`}>
        ADD TO CART
      </div>
    </div>
  )
}

export default AddToCart;