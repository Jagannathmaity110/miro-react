import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collaborate from "./components/Collaborate";
import Feature from "./components/Feature";
import WorkFlow from "./components/WorkFlow";
import Team from "./components/Team";
import TrustBadge from "./components/TrustBadge";
import Tesimonials from "./components/Tesimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Collaborate/>
      <Feature/>
      <WorkFlow/>
      <Team/>
      <TrustBadge/>
      <Tesimonials/>
    </>
  );
};

export default App;
