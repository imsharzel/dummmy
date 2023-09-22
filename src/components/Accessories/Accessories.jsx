import React, { useState, useEffect } from "react";
import "./Accessories.css";
import axios from "axios";
import { accessories } from "../../data";

// const Accessories = (props) => {
//   const cycleAccessories = accessories.filter(
//     (accessory) => accessory.cat === "cycle"
//   );
//   const cyclistAccessories = accessories.filter(
//     (accessory) => accessory.cat === "cyclist"
//   );

//   const [sub, setSub] = useState(null);
//   const categoryId = props.categoriesID; // Replace with the actual pramsId value

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`https://cyclecircle.onrender.com/api/v1/navigator/${categoryId}`);

//       console.log(response.data);
//       setSub(response.data); // Use response.data instead of response.json()

//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="partsContainer">
//       {sub && sub.subCategoriesInfo.map((data) => (
//         <div className="cardContainer" key={data.id}>
//           <div className="card">
//             <img src={data.image} alt="" />
//           </div>
//           <div className="name">{data.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accessories;

const Accessories = () => {
  const cycleAccessories = accessories.filter(
    (accessory) => accessory.cat === "cycle"
  );
  const cyclistAccessories = accessories.filter(
    (accessory) => accessory.cat === "cyclist"
  );
  return (
    <>
      <div className="container">
        <div className="cContainer">
          <h2>For the Cycle</h2>
          <div className="containerItems">
            {cycleAccessories.map((data) => (
              <div className="cCardContainer" key={data.id}>
                <div className="cCard">
                  <img src={data.img} alt="" />
                </div>
                <div className="cName">{data.name}</div>
              </div>
            ))}
            {/* <div className="categoryContainer">
        <div className="category">
          <h2>Cycle</h2>
          <div className="gridSection">
            {cycleAccessories.map((data) => (
              <div className="cardContainer accessories" key={data.id}>
                <div className="card">
                  <img src={data.img} alt="" />
                </div>
                <div className="name">{data.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="category">
          <h2>Cyclist</h2>
          <div className="gridSection">
            {cyclistAccessories.map((data) => (
              <div className="cardContainer accessories" key={data.id}>
                <div className="card">
                  <img src={data.img} alt="" />
                </div>
                <div className="name">{data.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
          </div>
        </div>
        <div className="cContainer">
          <h2>For the Cyclist</h2>
          <div className="containerItems">
            {cyclistAccessories.map((data) => (
              <div className="cCardContainer" key={data.id}>
                <div className="cCard">
                  <img src={data.img} alt="" />
                </div>
                <div className="cName">{data.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessories;
