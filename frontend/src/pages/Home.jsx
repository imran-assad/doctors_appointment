import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopsDoctor from "../components/TopsDoctor";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <SpecialityMenu />
        <TopsDoctor />
        <Banner />
        <Footer />
      </div>
    </>
  );
};

export default Home;
