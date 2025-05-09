import React from "react";

import "./components/section-cards/Product.css";

function Product() {
  return (
    <div className="prodcutss">
      <h1 className="select-product">
        Please select the products you are most interested in
      </h1>

      <div className="list">
        <div className="list1">
          <input type="checkbox" />
          <p className="ptag">CAN-IT BAGS</p>
        </div>
        <div className="list1">
          <input type="checkbox" />
          <p className="ptag">BOTTLE-IT BAGS</p>
        </div>
        <div className="list1">
          <input type="checkbox" />
          <p className="ptag"> BAG-IT BAGS</p>
        </div>
        <div className="list1">
          <input type="checkbox" />
          <p className="ptag"> TAKE-IT BAGS - CUSTOMER TAKE OUT BAGS</p>
        </div>
        <div className="list1">
          <input type="checkbox" />
          <p className="ptag">TRASH-IT BAGS 13 GAL-TALL KITCHEN DRAWSTRING TRASH BAGS </p>
        </div>
        <div className="list1">
          <input type="checkbox" />
          <p className="ptag">TRASH-IT BAGS 33 GAL-LARGE TRASH BAGS </p>
        </div>
        <div className="list1">
          <input type="checkbox" />
          <p className="ptag">TRASH-IT BAGS 33 GAL-LARGE TRASH BAGS </p>
        </div>
      </div>

      <button className="btn">Submit</button>
    </div>
  );
}

export default Product;
