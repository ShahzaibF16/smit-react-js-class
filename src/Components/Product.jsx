import React from "react";
import { Link } from "react-router-dom";

function Product(){
    const array = [
        {
            id:"1",
            name:"Ali",
            contact:"00834237",
            address:"sdfsdkfik"
        },
        {
            id:"2",
            name:"Bilal",
            contact:"00834237",
            address:"sdfsdkfik"
        },
        {
            id:"3",
            name:"Kashif",
            contact:"00834237",
            address:"sdfsdkfik"
        }
    ]
    return(
        <>
        <h1>Product List</h1>
        <button style={{backgroundColor:"crimson",padding:"10px"}}>
            <Link to="/" style={{textDecoration:"none",color:"#fff"}}>Home</Link>
        </button>

        {array.map((v,i)=>{
            return(
            <li key={i} style={{margin:"10px"}}>
                <Link to="/product-details">
                {v.name}
                </Link>
            </li>
            )
        })
    }
        </>
    )
}

export default Product;