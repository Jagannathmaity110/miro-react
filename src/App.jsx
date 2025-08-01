import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collaborate from "./components/Collaborate";
import Feature from "./components/Feature";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Collaborate/>
      <Feature/>
    </>
  );
};

export default App;
