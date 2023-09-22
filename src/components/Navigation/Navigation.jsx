import React, { useState, useEffect } from "react";
import "./Navigation.css";
import Parts from "../Parts/Parts";
import Accessories from "../Accessories/Accessories";
import Clothing from "../Clothing/Clothing";
import axios from "axios";

const Navigation = () => {
  const [selectedSection, setSelectedSection] = useState("parts");
  const [categoriesID, setCategoriesID] = useState("64de7823cdba27c912b2d1ce");
  const [categories, setCategories] = useState([]);

  const handleSectionClick = (section, categoriesId) => {
    setCategoriesID(categoriesId);
    setSelectedSection(section);
  };

  let mainBackgroundColor = "var(--color-red)"; // Default background color

  if (selectedSection === "accessories") {
    mainBackgroundColor = "var(--color-blue)";
  } else if (selectedSection === "clothing") {
    mainBackgroundColor = "var(--color-orange)";
  }

  useEffect(() => {
    axios
      .get("https://cyclecircle.onrender.com/api/v1/categories")
      .then((res) => {
        setCategories(res.data);
        // console.log(res.data); // Store the API response data in the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getBackgroundColor = (catName) =>{
    let backgroundColor = "var(--color-primary)";
    switch (catName) {
      case "parts":
        backgroundColor = "var(--color-red)";
        break;
      case "accessories":
        backgroundColor = "var(--color-blue)";
        break;
      case "clothing":
        backgroundColor = "var(--color-orange)";
        break;
      default:
        backgroundColor = "var(--color-primary)";
        break;
        }
        return backgroundColor;
  }

  return (
    <div className="navigationContainer">
      {/* <div className="sections">
        { categories.map((category) => (
          <span
            key={category.id}
            style={{
              backgroundColor: getBackgroundColor(category.name.toLowerCase()),
              boxShadow:
                selectedSection === category.name.toLowerCase()
                  ? "gray 0px -6px 6px -6px"
                  : "0px -2px 4px 0px gray inset",
              borderRadius: "10px 10px 0px 0px",
            }}
            onClick={() =>
              handleSectionClick(category.name.toLowerCase(), category._id)
            }
          >
            {category.name}
          </span>
        ))}
      </div> */}
      <div className="sections">
        <span
          style={{
            backgroundColor: "var(--color-red)",
            boxShadow:
              selectedSection === "parts"
                ? "gray 0px -6px 6px -6px"
                : "0px -2px 4px 0px gray inset",
            borderRadius: "10px 10px 0px 0px",
            color: "white",
          }}
          onClick={() => handleSectionClick("parts")}
        >
          Parts
        </span>
        <span
          style={{
            backgroundColor: "var(--color-blue)",
              
            boxShadow:
              selectedSection === "accessories"
                ? "gray 0px -6px 6px -6px"
                : "0px -2px 4px 0px gray inset",

                borderRadius: "10px 10px 0px 0px",
          }}
          onClick={() => handleSectionClick("accessories")}
        >
          Accessories(A)
        </span>
        <span
          style={{
            backgroundColor: "var(--color-orange)",

            boxShadow:
              selectedSection === "clothing"
                ? "gray 0px -6px 6px -6px"
                : "0px -2px 4px 0px gray inset",

                borderRadius: "10px 10px 0px 0px",
          }}
          onClick={() => handleSectionClick("clothing")}
        >
          Accessories(B)
        </span>
      </div>
      <div className="main" style={{ backgroundColor: mainBackgroundColor, borderRadius:"0 10px 10px 10px" }}>
        {selectedSection === "parts" && <Parts categoriesID={categoriesID} />}
        {selectedSection === "accessories" && (
          <Accessories categoriesID={categoriesID} />
        )}
        {selectedSection === "clothing" && (
          <Clothing categoriesID={categoriesID} />
        )}
      </div>
    </div>
  );
};

export default Navigation;
