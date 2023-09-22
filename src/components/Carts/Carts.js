import React from "react";
import "./Carts.css";
import Carts_Breadcrum from "./Carts_Breadcrum";
import CartsProduct from "./CartsProduct";
import LikeProduct from "../Wishlist/LikeProduct";
import Footer from "../Footer";

function Carts() {
  return (
    <>
      <Carts_Breadcrum/>
      <CartsProduct/>
      <LikeProduct/>
      <Footer/>
    </>
  );
}

export default Carts;
