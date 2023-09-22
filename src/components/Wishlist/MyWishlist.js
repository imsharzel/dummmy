import React from "react";
import "./MyWishlist.css";
import ProductCard from "./ProductCard";

function MyWishlist() {
  return (
    <div className="mywishlist-container">
      <div className="text-container">
        <h3>My Wishlist</h3>
        <span>(5 Items)</span>
      </div>
      <div className="product-card-container">
        <ProductCard />
      </div>
    </div>
  );
}

export default MyWishlist;
