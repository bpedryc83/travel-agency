import styles from './DrawCartItem.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import SetAmount from '../setAmount/SetAmount';
import { IMGS_URL } from '../../../config';
import { saveTripInCart } from '../../../redux/cartThunks';
import { deleteTripFromCart } from '../../../redux/cartThunks';
import clsx from 'clsx';

const DrawCartItem = ( {cartItemTripData} ) => {

  const [peopleAmount, setPeopleAmount] = useState(cartItemTripData.peopleAmount)
  const [activeButton, setActiveButton] = useState(false);
  const [tripRemarks, setTripRemarks] = useState('');

  const dispatch = useDispatch();

  const addTriptoCart = (e, tripId, peopleAmount) => {
    e.preventDefault();
    dispatch(saveTripInCart( tripId, peopleAmount ));
  }

  const removeTripFromCart = (e, tripId) => {
    e.preventDefault();
    dispatch(deleteTripFromCart( tripId ));
  }

  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.cartItemRow}`}>
        <div className={`${styles.divThumbnail}`}>
          <img className={`${styles.thumbnail}`} src={`${IMGS_URL + cartItemTripData.mainPhoto}`} alt={`${cartItemTripData.title}`} />
        </div>
        
        <div className={`${styles.divRestData}`}>
          <div className={`${styles.itemInfo}`}>
            <p className='mb-1 fw-bold'>{cartItemTripData.title}</p>
            <p className='mb-2 text-center'>Country: {cartItemTripData.country}</p>
            <p className={`${styles.totalItemPrice}`}>TOTAL PRICE: {cartItemTripData.price * peopleAmount} PLN</p>
          </div> 
        </div>

        <div className={`${styles.setAmount}`}>
          <p className='mb-0 fw-bold text-center'>People: </p>
          <SetAmount peopleAmount = { peopleAmount } setPeopleAmount = { setPeopleAmount } maxPeopleAmount = { cartItemTripData.maxPeopleAmount } setActiveButton = {setActiveButton} />
          <p className={clsx({ [styles.buttonActive]: activeButton, [styles.buttonNotActive]: !activeButton })} onClick={e => addTriptoCart(e, cartItemTripData.tripId, peopleAmount)}>
            CONFIRM CHANGES
          </p>
        </div>
      </div>

      <div className={`${styles.cartItemSecondRow}`}>
        <div className={`${styles.divFreespace}`}>
        </div>

        <div className={`${styles.divTextarea}`}>
          <label htmlFor="tripRemarks">Type additional remarks (optional):</label>
          <textarea
              className={`${styles.textarea}`}
              id="tripRemarks"
              rows="4"
              value={tripRemarks}
              onChange={e => setTripRemarks(e.target.value)}
              style={{ width: '100%', resize: 'vertical' }}
          />
        </div>

        <div className={`${styles.divRemoveItem}`}>
          <div className={`${styles.removeItem}`} onClick={e => removeTripFromCart(e, cartItemTripData.tripId)}>REMOVE</div>
        </div>
      </div>

      <div className={`mb-5 ${styles.bottomLine}`}>
      </div>
    </div>
  )
}

export default DrawCartItem;