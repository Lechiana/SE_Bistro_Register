import React from "react";
import NavContent from "./NavContent";
import Hero from "./Hero";
import AllMenu from "./AllMenu";
import Pagination from "./Pagination";

const Home = () => {
  return (
    <div>
      <Hero />
      <NavContent />
      <AllMenu />
      <Pagination />
    </div>
  );
};

export default Home;
