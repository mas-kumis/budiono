import React from "react";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Category from "./components/Category";
import Honeymoon from "./components/Honeymoon";
import Resort from "./components/Resort";
import Tagline from "./components/Tagline";

const page = () => {
  return (
    <div>
      <Header />
      <Partners />
      <Category />
      <Honeymoon />
      <Resort />
      <Tagline />
      <h4>Landing Page 1 </h4>
    </div>
  );
};

export default page;
