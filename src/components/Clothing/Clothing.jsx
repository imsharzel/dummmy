import React, { useState, useEffect } from 'react';
import "./Clothing.css";
import axios from "axios";
import { clothing } from "../../data";

// const Clothing = (props) => {
 
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

// export default Clothing;

const Clothing = () => {
  return (
    <div className="clothContainer">
      {clothing.map((data) => (
        <div className="clothcardContainer" key={data.id}>
          <div className="clothcard">
            <img src={data.img} alt="" />
          </div>
          <div className="clothname">{data.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Clothing;
