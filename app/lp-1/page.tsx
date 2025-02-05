import React from "react";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Category from "./components/Category";
import Honeymoon from "./components/Honeymoon";
import Resort from "./components/Resort";
import Tagline from "./components/Tagline";
import Explore from "./components/Explore";
import Card from "./components/Card";

const page = () => {
  return (
    <div>
      <Header />
      <Partners />
      <Category />
      <Honeymoon />
      <Resort />
      <Tagline />
      <Explore />
      <Card />
      <h1>Travel App</h1>
    </div>
  );
};

export default page;
