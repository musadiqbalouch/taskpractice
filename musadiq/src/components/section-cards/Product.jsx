import React from "react"

function Product (){
    return(
        <>
        <h1 className="select-product">Please select the products you are most interested in</h1>
        <div className="radio">
            <input type="radio" /><p>CAN-IT BAGS</p>
        </div>
        <div className="radio">
            <input type="radio" /><p>BOTTLE-IT BAGS</p>
        </div>
        <div className="radio">
            <input type="radio" /><p> BAG-IT BAGS</p>
        </div>
        <div className="radio">
            <input type="radio" /><p> TAKE-IT BAGS - CUSTOMER TAKE OUT BAGS</p>
        </div>
        <div className="radio">
            <input type="radio" /><p>TRASH-IT BAGS 13 GAL - TALL KITCHEN DRAWSTRING TRASH BAGS </p>
        </div>
        <div className="radio">
            <input type="radio" /><p>TRASH-IT BAGS 33 GAL - LARGE TRASH BAGS </p>
        </div>
        <div className="radio">
            <input type="radio" /><p>TRASH-IT BAGS 33 GAL - LARGE TRASH BAGS </p>
        </div>
        <button>Submit</button>
        
        </>
    )
}

export default Product