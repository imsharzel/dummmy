import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "./Breadcumb.css";
import Navigation from "../Navigation/Navigation";

function Breadcumb() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavOpen(prevState => !prevState);
  }

  return (
    <>
      <nav className="custom-dropdown">
        <Link to="/"> Home</Link> {" > "}
        <Link to="#!"> Parts</Link> {" > "}
        <Link to="#!"> Frameset</Link> {" > "}
        <Link to="#!"> VELOHELD ICONX</Link> {"> "}

        <span className="menu" onClick={toggleNavigation}>
          Menu {isNavOpen ? <ArrowDropDownIcon style={{ color: "white", fontSize: "35px" }} /> : <ArrowRightIcon style={{ color: "white", fontSize: "35px" }} />}
        </span>
      </nav>
      <div className={`navigation-transition ${isNavOpen ? 'open' : ''}`}>
        {isNavOpen && <Navigation />}
      </div>
    </>
  );
}

export default Breadcumb;
