import React from "react";
import "./Discrip.css"

function discrip() {
  return (
    <div className="discription">
      <div>
        <h1 className="subcribe">Subscribe to Our Newsletter</h1>
        <p className="pa1">
          Stay up-to-date with the latest trends in digital marketingand receive
          exclusive tips and insights by subscribing to our newsletter.
        </p>
        <input className="mail" type="email" placeholder="Enter Your Email"/>
        <button className="mailbtn">Subscribe →</button>
      </div>
      <div className="menu1">
        <h1 className="menuu">Menu</h1>
        <h3 className="x1">Home</h3>
        <h3 className="x1">About Us</h3>
        <h3 className="x1">About Us</h3>
        <h3 className="x1">contact us for pre-order</h3>
        <h3 className="x1">Commercial videos</h3> 
      </div>
      <div className="product">
        <h1 className="prod">Products</h1>
        <h3 className="x1">Can-it</h3>
        <h3 className="x1">bottle-it</h3>
        <h3 className="x1">bag-it</h3>
        <h3 className="x1">trash-itb</h3>
        <h3 className="x1">take-it</h3>
      </div>
      <div className="ContactUs">
        <h1 className="cont">Contact Us</h1>
        <h3 className="info">Office Address :</h3>
     <h3 className="ppp"> 1704 N Park Drive, Suite #311, Wilmington, Delaware, 19806</h3>
     <h3 className="info">Mails :</h3>
     <h3 className="ppp"> info@canitandbottleitbags.com
     kirbyhudson@yahoo.com
    marvinjpowell13@verizon.net</h3>
    <h3 className="info">Phone :</h3>
    <h3 className="ppp">Kirby: +1 (302) 267-0554</h3>
   <h3 className="ppp">  Marvin:+1 (610) 620-1275</h3>
      </div>
    </div>
  );
}

export default discrip