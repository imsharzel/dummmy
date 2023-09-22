import React from "react";
import "./CartsProduct.css";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

function CartsProduct() {
  return (
    <>
      <div className="cartsProduct-container">
        <div className="carts-container">
          <div className="carts-Product-container">
            <div className="cartsImg-container">
              <img src="https://images.bike24.com/media/720/i/mb/19/99/7d/iconx-frame-steelfork-glokzin-teal-glossy-1-985567.jpg" />
            </div>
            <div className="cartProductDetails">
              <div className="cartsProduct-details">
                <span className="carts-product-name">Frame</span>
                <div className="cartsVarient-qty">
                  <div className="cartsVarient-container">
                    <label for="variant">Variant:</label>
                    <select name="variant" id="variant">
                      <option value="small">S</option>
                      <option value="medium">M</option>
                      <option value="large">L</option>
                    </select>
                  </div>
                  <div className="cartsQty-container">
                    <label for="quantity">Qty:</label>
                    <select name="quantity" id="quantity">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
                <span>₹999.00</span>
                <div className="cartsProduct-delivery-date">
                  <p>Delivery by</p>
                  <span>20-Aug-2023</span>
                </div>
              </div>
              <ClearOutlinedIcon style={{background:"#a19a9a",color:"white",borderRadius:"50px",marginTop:"0.5rem"}} />
            </div>
          </div>
          <div className="carts-Product-container">
            <div className="cartsImg-container">
              <img src="https://images.bike24.com/media/720/i/mb/19/99/7d/iconx-frame-steelfork-glokzin-teal-glossy-1-985567.jpg" />
            </div>
            <div className="cartProductDetails">
              <div className="cartsProduct-details">
                <span className="carts-product-name">Frame</span>
                <div className="cartsVarient-qty">
                  <div className="cartsVarient-container">
                    <label for="variant">Variant:</label>
                    <select name="variant" id="variant">
                      <option value="small">S</option>
                      <option value="medium">M</option>
                      <option value="large">L</option>
                    </select>
                  </div>
                  <div className="cartsQty-container">
                    <label for="quantity">Qty:</label>
                    <select name="quantity" id="quantity">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
                <span>₹999.00</span>
                <div className="cartsProduct-delivery-date">
                  <p>Delivery by</p>
                  <span>20-Aug-2023</span>
                </div>
              </div>
              <ClearOutlinedIcon style={{background:"#a19a9a",color:"white",borderRadius:"50px",marginTop:"0.5rem"}} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartsProduct;
