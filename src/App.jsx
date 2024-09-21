// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CategoriesCarouselStates from "./components/CategoriesCarouselStates";
import HeroSection from "./components/HeroSection";
import Jewelry from "./components/jwellery";
import Apparels from "./components/Apparels";
import StatePageWrapper from "./components/StatePageWrapper";
// import CartPage from "./components/CartPage";
import MapComponent from "./components/MapComponet";
import DetailPage from "./components/DetailPage";
import IndiaMap from "./components/IndiaMap";
import WhatsNew from "./components/WhatsNew"; // Import the WhatsNew component
import "./App.css"; // Import the CSS file
import SideCarouselComponent from "./components/ArtistSpotlight";
import Footer from "./components/FooterSection";
function App() {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateSelect = (stateName) => {
    setSelectedState(stateName);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HeroSection />
              <CategoriesCarouselStates />
              <WhatsNew /> {/* Add the WhatsNew component here */}
              <SideCarouselComponent />{" "}
              {/* Add the ArtistSpotlight component here */}
              <Footer />
            </Layout>
          }
        />
        <Route
          path="/jewelry"
          element={
            <Layout>
              <Jewelry />
            </Layout>
          }
        />
        <Route
          path="/apparels"
          element={
            <Layout>
              <Apparels />
            </Layout>
          }
        />
        <Route
          path="/states/:stateId"
          element={
            <Layout>
              <StatePageWrapper />
            </Layout>
          }
        />
        {/* <Route
          path="/cart"
          element={
            <Layout>
              <CartPage />
            </Layout>
          }
        /> */}
        <Route
          path="/india"
          element={<IndiaMap selectedState={selectedState} />}
        />
        <Route
          path="/map"
          element={<MapComponent onStateSelect={handleStateSelect} />}
        />
        <Route path="/monument/:name" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
