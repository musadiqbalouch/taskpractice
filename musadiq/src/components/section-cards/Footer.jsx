import React from "react";
import Parag from "./Parag";
import Disrip from "./Discrip";
import Footerr from "./Footerr";
import "./Parag.css"


function footer(){
    return(
        <div className="footer">
           <div> <img  className="footer-img"src="./src/assets/Footerimg.png"></img></div> 
            <div>
               <Parag />
               <Disrip />
               <Footerr />
            </div>
        </div>
        
    )
}
export default footer