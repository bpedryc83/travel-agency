import { Container } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useMemo } from "react";
import { getTempOrderItems } from "../../../redux/orderRedux";
import styles from './OrderConfirmation.module.scss';
import DrawConfirmationItem from "../../features/drawConfirmationItem/DrawConfirmationItem";

const OrderConfirmation = props => {

  const orderItems = useSelector(getTempOrderItems);

  
  const totalPrice = useMemo(() => {
    return orderItems.reduce((total, current)=>{return total + (current.price * current.peopleAmount)}
    , 0);
  }, [orderItems]);

  return (
    <Container className={`d-block py-1`}>
      <div className={`${styles.mainGrid}`}>
        <div className={`${styles.orderHeader}`}>YOUR ORDER SUMMARY</div>
        {orderItems.map(orderItem => 
          <DrawConfirmationItem orderItem = { orderItem } key={`${orderItem.tripId}`} />
        )}
      
        <div className={`${styles.totalPrice}`}>
          TOTAL PRICE FOR ORDER: {totalPrice} PLN
        </div>
          
        <div className={`mb-5 ${styles.bottomLine}`}>
        </div>

        <div className={`${styles.divContactForm}`}>
          <form className={`${styles.contactForm}`}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email" required/>
              </div>
            </form>
          </div>

          <div className={`mb-4 ${styles.bottomLine}`}>
          </div>

        <div className={`${styles.sendOrder}`}>
        {/* <div className={`${styles.sendOrder}`} onClick={saveUnconfirmedOrder}> */}
          SEND ORDER
        </div>
      </div>
    </Container>
  )
  }

export default OrderConfirmation;