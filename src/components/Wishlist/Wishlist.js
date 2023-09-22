import React from "react";
import MyWishlist from "./MyWishlist";
import LikeProduct from "./LikeProduct";
import Header from "../Header";
import Footer from "../Footer";

function Wishlist() {
  return (
    <div>
      <Header />
      <MyWishlist />
      <LikeProduct/>
      <Footer />
    </div>
  );
}

export default Wishlist;
