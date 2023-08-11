import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadTripsRequest } from "./redux/tripsRedux";
import { initializeCart } from './redux/cartRedux';

//Layouts
import Header from "./components/layouts/header/header";
import Footer from "./components/layouts/footer/footer";

//Pages
import Home from "./components/pages/home/home";
import SingleTrip from './components/pages/singleTrip/SingleTrip';
import Cart from './components/pages/cart/Cart';
import OrderConfirmation from './components/pages/orderConfirmation/OrderConfirmation';
import { initializeOrder } from './redux/orderRedux';
import Login from './components/pages/login/login';
import Register from './components/pages/register/Register';

const App = () => {

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTripsRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initializeCart());
  }, []);

  useEffect(() => {
    dispatch(initializeOrder());
  }, []);

  return (
    <div className="mainContainer">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="trips/:id" element={<SingleTrip />} />
          <Route path="cart" element={<Cart />} />
          <Route path="cart/confirmation" element={<OrderConfirmation />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
