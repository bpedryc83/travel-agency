import styles from './DrawConfirmationItem.module.scss';
import { IMGS_URL } from '../../../config';

const DrawConfirmationItem = ( { orderItem } ) => 
    <div className={`${styles.main}`}>
      <div className={`${styles.confirmationItemRow}`}>
        <div className={`${styles.divThumbnail}`}>
          <img className={`${styles.thumbnail}`} src={`${IMGS_URL + orderItem.mainPhoto}`} alt={`${orderItem.title}`} />
        </div>
        
        <div className={`${styles.divRestData}`}>
          <div className={`${styles.itemInfo}`}>
            <p className='mb-1 fw-bold'>{orderItem.title}</p>
            <p className='mb-1'>Country: {orderItem.country}</p>
            <p className='mb-1'>People: {orderItem.peopleAmount}</p>
            {orderItem.remarks && <div className={`mb-3 ${styles.divTextarea}`}>Remarks: {orderItem.remarks}</div>}
            <p className={`${styles.itemPrice}`}>PRICE: {orderItem.price * orderItem.peopleAmount} PLN</p>
          </div> 
        </div>
      </div>
    </div>

export default DrawConfirmationItem;