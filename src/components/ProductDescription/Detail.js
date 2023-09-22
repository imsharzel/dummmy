import React, { useState, useEffect, useRef } from "react";
import "./Detail.css";
import { Product } from "../../data";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShortcutOutlinedIcon from "@mui/icons-material/ShortcutOutlined";
import Description from "./Description";
import AboutBrands from "./AboutBrands";
import Ratings_Reviews from "./Ratings_Reviews";
import Discover from "./Discover";
import TechnicalData from "./TechnicalData";
import vector_black from "../../icons/Vector_black.svg"
import vector_white from "../../icons/Vector_white.svg"
import data_black from "../../icons/data_black.svg"
import data_white from "../../icons/data_white.svg"
import review_black from "../../icons/review_black.svg"
import review_white from "../../icons/review_white.svg"
import play_black from "../../icons/play_black.svg"
import play_white from "../../icons/play_white.svg"

function Detail() {
  const [slideIndex, setSlideIndex] = useState(1);

  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(9);
  const [cartVal, setCartVal] = useState(0);

  const [selectedColor, setSelectedColor] = useState(Product.colors[0]);
  const [selectedProduct, setSelectedProduct] = useState([
    Product.images.blueColor,
  ]);
  const [infoTitle, setInfoTitle] = useState("Compatibility");
  const slideRef = useRef();

  useEffect(() => {
    if (!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childrenElementCount = slideRef.current.childElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width);
  }, []);

  function plusSlides(n) {
    const newSlideIndex = slideIndex + n;
  
    if (newSlideIndex <= 0) {
      setSlideIndex(selectedProduct.length); // Wrap to the last image
    } else if (newSlideIndex > selectedProduct.length) {
      setSlideIndex(1); // Wrap to the first image
    } else {
      setSlideIndex(newSlideIndex);
    }
  
    slideShow(newSlideIndex <= 0 ? selectedProduct.length : newSlideIndex);
  }

  function slideShow(n) {
    if (n > Product.images.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(Product.images.length);
    }
  }

  function dragStart(e) {
    setStart(e.clientX);
  }
  function dragOver(e) {
    let touch = e.clientX;
    setChange(start - touch);
  }
  function dragEnd(e) {
    // drag left change > 0
    // drag right change < 0
    if (change > 0) {
      slideRef.current.scrollLeft += width;
    } else {
      slideRef.current.scrollLeft -= width;
    }
  }
  useEffect(() => {
    if (!slideRef.current || !width) return;
    let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
    slideRef.current.scrollLeft =
      slideIndex > numOfThumb ? (slideIndex - 1) * width : 0;
  }, [width, slideIndex]);

  function increaseCarts(cartVal) {
    setCartVal(cartVal + 1);
  }
  function decreaseCarts() {
    if (cartVal <= 0) {
      setCartVal(cartVal);
      return;
    }
    setCartVal(cartVal - 1);
  }

  const setSelectedImg = (color) => {
    if (color === "blue") {
      setSelectedProduct(Product.images.blueColor);
    } else if (color === "yellow") {
      setSelectedProduct(Product.images.yellowColor);
    } else if (color === "gray") {
      setSelectedProduct(Product.images.greyColor);
    } else {
      setSelectedProduct(Product.images.purpleColor);
    }
  };
  useEffect(() => {
    setSelectedImg();
  },[]);

  useEffect(()=>{
    const interval = setInterval(() => {
      plusSlides(1);
    }, 3000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <React.Fragment>
      <section className="product-details">
        <div className="product-page-img">
          <div className="big-images">
            {selectedProduct.map(
              (
                image,
                index // Added parentheses for the arrow function
              ) => (
                <div
                  className="mySlides"
                  key={index}
                  style={{
                    display: index + 1 === slideIndex ? "block" : "none",
                  }}
                >
                  <img src={image.src} alt="" />
                </div>
              )
            )}
            <a href="#!" className="prev" onClick={() => plusSlides(-1)}>
              &#10094;
            </a>
            <a href="#!" className="next" onClick={() => plusSlides(1)}>
              &#10095;
            </a>
          </div>

          <div
            className="slider-img"
            draggable={true}
            ref={slideRef}
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragEnd={dragEnd}
          >
            {selectedProduct.map(
              (
                image,
                index // Added parentheses for the arrow function
              ) => (
                <div
                  key={index}
                  className={`slider-box ${
                    index + 1 === slideIndex ? "active" : ""
                  }`}
                  onClick={() => setSlideIndex(index + 1)}
                >
                  <img src={image.src} alt="" />
                </div>
              )
            )}
          </div>
        </div>

        <div className="product-page-details">
          <div className="product-container">
            <div className="product-container-detail">
              <strong>{Product.name}</strong>
              <p className="product-category">{Product.category}</p>
              <div className="product-rating">
                <StarIcon style={{ fontSize: "1.1rem" }} />
                <StarIcon style={{ fontSize: "1.1rem" }} />
                <StarIcon style={{ fontSize: "1.1rem" }} />
                <StarIcon style={{ fontSize: "1.1rem" }} />
                <StarIcon style={{ fontSize: "1.1rem" }} />
                <p>(5)</p>
              </div>
            </div>
            <div className="product-fav-share">
              <a href="#!" className="favourite">
                <FavoriteBorderOutlinedIcon
                  style={{
                    color: "purple",
                    fontSize: "1.8rem",
                  }}
                />
                Favourite
              </a>
              <a href="#!" className="share">
                <ShortcutOutlinedIcon
                  style={{
                    color: "purple",
                    fontSize: "1.8rem",
                  }}
                />
                Share
              </a>
            </div>
          </div>
          <div className="product-price-detail">
            <p className="product-price">
              <span style={{ fontSize: "3rem" }}>₹</span>
              {Math.round(
                Product.price - (Product.price * Product.discount) / 100
              )}{" "}
              <del>{Product.price}₹</del>
            </p>
            <p className="inclusive">(inclusive of all taxes)</p>
          </div>
          <div className="product-variant-color">
            <div className="product-variant">
              <label for="variant">Variant:</label>
              <select name="variant" id="variant">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div className="product-options">
              <span>Colors:</span>
              <div className="product-colors">
                {Product.colors.map((color) => (
                  <div key={color}>
                    <button
                      style={{ background: color }}
                      className={color === selectedColor ? "active" : ""}
                      onClick={() => {
                        setSelectedColor(color);
                        setSelectedImg(color);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="product-purchase">
            <div className="product-carts">
              <p>Add To Cart</p>
              <div className="product-counter">
                <KeyboardArrowDownIcon
                  style={{
                    background: "#003765",
                    borderRadius: "50px",
                    width: "28px",
                    height: "28px",
                    cursor: "pointer",
                  }}
                  onClick={() => decreaseCarts(cartVal)}
                />
                <span>{cartVal}</span>
                <KeyboardArrowUpIcon
                  style={{
                    background: "#003765",
                    borderRadius: "50px",
                    width: "28px",
                    height: "28px",
                    cursor: "pointer",
                  }}
                  onClick={() => increaseCarts(cartVal)}
                />
              </div>
              <a href="#!" className="add-cart">
                <ShoppingCartOutlinedIcon
                  style={{
                    background: "white",
                    borderRadius: "50px",
                    color: "black",
                    padding: "5px",
                    width: "30px",
                    height: "30px",
                  }}
                />
                Add to Carts
              </a>
            </div>
            <div className="product-buy">
              <div className="purchase-text">
                <p>
                  <sup>*</sup>No free delivery above X quantity
                </p>
                <p>
                  <sup>*</sup>No MOQ for free delivery
                </p>
              </div>
              <a href="#!" className="buy-now">
                <LocalMallOutlinedIcon
                  style={{
                    background: "rgb(216 200 15)",
                    borderRadius: "50px",
                    color: "black",
                    padding: "5px",
                    width: "30px",
                    height: "30px",
                  }}
                />
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="product-all-info">
        <ul className="product-info-menu">
            <li
              onClick={() => setInfoTitle("Compatibility")}
              className={`p-info-list ${
                "Compatibility" === infoTitle ? "active" : ""
              }`}
            >
              <img className="info-img-compatibility" src={`${"Compatibility" === infoTitle ? vector_white : vector_black}`}/>
              Compatibility
            </li>
            <li
              onClick={() => setInfoTitle("Technical Data")}
              className={`p-info-list ${
                "Technical Data" === infoTitle ? "active" : ""
              }`}
              style={{background:`${"Technical Data" === infoTitle ? "#3a9978" : ""}`}}
            >
              <img className="info-img" src={`${"Technical Data" === infoTitle ? data_white : data_black}`}/>
              Technical Data
            </li>
            <li
              onClick={() => setInfoTitle("How To")}
              className={`p-info-list ${
                "How To" === infoTitle ? "active" : ""
              }`}
              style={{background:`${"How To" === infoTitle ? "#d49896" : ""}`}}
            >
              <img className="info-img" src={`${"How To" === infoTitle ? play_white : play_black}`}/>
              How To
            </li>
            <li
              onClick={() => setInfoTitle("Reviews")}
              className={`p-info-list ${
                "Reviews" === infoTitle ? "active" : ""
              }`}
              style={{background:`${"Reviews" === infoTitle ? "#9e3dcc" : ""}`}}
            >
              <img className="info-img" src={`${"Reviews" === infoTitle ? review_white : review_black}`}/>
              Reviews
            </li>
        </ul>
        {Product.infos.map((info) => (
          <div
            key={info.title}
            className={`info-container ${
              info.title === infoTitle ? "active" : ""
            }`}
          >
            {info.title === "Reviews" && <Ratings_Reviews />}
            {info.title === "Technical Data" && <TechnicalData />}
            {info.title === "How To" && <Discover />}
            {info.title === "Compatibility" && <Description />}
          </div>
        ))}
      </section>
    </React.Fragment>
  );
}

export default Detail;
