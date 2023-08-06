import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadTripsRequest } from "./redux/tripsRedux";

//Layouts
import Header from "./components/layouts/header/header";
import Footer from "./components/layouts/footer/footer";

//Pages
import Home from "./components/pages/home/home";
import SingleTrip from './components/pages/singleTrip/SingleTrip';

const App = () => {

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTripsRequest());
  }, [dispatch]);

  return (
    <div className="mainContainer">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="trips/:id" element={<SingleTrip />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
