import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar/Navbar2";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import OTP from "./pages/OTP";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Navbar2 />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/OTP" element={<OTP />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
