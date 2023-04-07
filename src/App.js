import React, { Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import FlashDeals from "./components/FlashDeals";
import TopCategory from "./components/TopCategory";
import Arrivals from "./components/Arrivals";
import Discounts from "./components/Discounts";
import Shops from "./components/Shops";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/flashdeals" element={<FlashDeals />}></Route>
          <Route path="/topcategories" element={<TopCategory />}></Route>
          <Route path="/arrivals" element={<Arrivals />}></Route>
          <Route path="/discounts" element={<Discounts />}></Route>
          <Route path="/shops" element={<Shops />}></Route>
          <Route path="/" element={<Navigate to="/home" />}></Route>
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
