import React from "react";
import "./Preorder.css"
import Orderdetails from "./Orderdetails";
import Btnn from "./Btnn";

function Preorder(){
    return(
     <div className="pre">
      <div>  <h1 className="pre-order"> Contact Us For <br /> 
  <span>Pre-Orders</span></h1></div>
<Orderdetails />
<Btnn />
     </div>
   
    )
}
export default Preorder