// import React from "react";
// import MultiLineChart from "./Components/LineChart";
// import BarChart from "./Components/BarChart";

// function App(){
//   return(
//     <div>
//       <h1>Hello Word</h1>
//       <MultiLineChart/>
//     </div>
//   )
// }

// export default App;


import React from "react";
import {
  Routes, Route
} from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Details from "./Components/Product_Details";

function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/product-details" element={<Details/>}></Route>
      </Routes>
    </>
  )
}

export default App