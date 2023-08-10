import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getCartItems } from '../../../redux/cartRedux';
import styles from './Cart.module.scss';
import InitDrawCartItem from '../../features/initDrawCartItem/InitDrawCartItem';

const Cart = () => {

  const [cartItems, setCartItems] = useState('');

  const loadedData = useSelector(getCartItems);

  useEffect(() => {
    setCartItems(loadedData);
  }, [loadedData]);

  return (
    <Container className={`d-block pb-3`}>
      <div className={`d-flex ${styles.mainGrid}`}>
        {cartItems.length > 0 && <div className={`${styles.cartHeader}`}>YOUR CART</div>}
        {cartItems.length === 0 && <div className={`${styles.cartHeaderWarning}`}>YOUR CART IS EMPTY</div>}      
      </div>
      {cartItems && <InitDrawCartItem cartItems = { cartItems } />}
    </Container>
  )
}

export default Cart;