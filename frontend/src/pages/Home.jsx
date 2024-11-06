import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopsDoctor from "../components/TopsDoctor";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <SpecialityMenu />
        <TopsDoctor />
      </div>
    </>
  );
};

export default Home;
