import React from "react";
import "./Orderdetails.css"

function Orderdetails (){
    return (
        <div className="details">
                <div className="detai" > 
                <h2 className="h2tag">First Name</h2>
                <input className="inputdetail" type="text" placeholder="Enter first Name" />
                </div>
                <div className="detai"> 
                <h2 className="h2tag">First Last Name</h2>
                <input className="inputdetail" type="text" placeholder="Enter Last Name" />
                </div>
                <div className="detai"> 
                <h2 className="h4tag">Email Address</h2>
                <input className="inputdetail" type="email" placeholder="Enter Email Name" />
                </div>
                <div className="detai"> 
                <h2 className="h4tag">Phone Number</h2>
                <input className="inputdetail" type="number" placeholder="+1 012 3456 789" />
                </div>
                <div className="detai"> 
                <h2 className="h3tag">Please select the products you are most interested in</h2>
                <input className="inputdetail1" type="text" placeholder="Select one" />
                </div>
                <div className="detai"> 
                <h2 className="h3tag"> Additional Comments or Questions</h2>
                <textarea className="inputdetail3" type="text" placeholder="Comments or Questions" />
                </div>
                

        </div>
    )
}
export default Orderdetails