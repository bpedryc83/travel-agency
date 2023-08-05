import { Container } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from "react";

//Layouts
import Header from "./components/layouts/header/header";
import Footer from "./components/layouts/footer/footer";

//Pages
import Home from "./components/pages/home/home";

const App = () => {

  return (
    <div className="mainContainer">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
