import React from "react";
import Name from "../../Name";
import Subject from "./Subject";
import Product from "./Product"
import "./Page.css"
import "./Page.css"

function Page (){
    return(
      <div className="heading1">
        <h1 className="header">Contect Us For Pre-Orders</h1>
        <div className="main">
        <Name />
        <Subject/>
        <Product />
        </div>
      </div>
      
     
)
}


export default Page