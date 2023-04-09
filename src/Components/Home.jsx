import React from "react";
// import Pic from "../assets/How-to-Design-the-Best-Homepage-in-3-Steps-1-931x550.jpeg"
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <h1>Home</h1>
            <Link to="/product" style={{textDecoration:"none",color:"#fff"}}>
            <button style={{backgroundColor:"crimson",padding:"10px"}}>Product page</button>
            </Link>
        {/* <img src={Pic} width={100+"%"} alt="home" /> */}
        </>
    )
}

export default Home;