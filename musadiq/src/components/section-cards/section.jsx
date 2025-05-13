import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import "./Section.css"; // CSS file import
import Page from "./Page";
import Footer from "./Footer";
import "./Footer.css"
import Task4 from "./Task4";


function Section() {
  return (
    <>
      <section className="section-container">
        <div className="heading">
          <h1>Presenting Our Special Product</h1>
        </div>
        <div className="card-container">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
          <Card5 />
        </div>
        <div className="landing-page" style={{ marginTop: "14rem" }}>
          <Page />
        </div>
        
      </section>
      <div className="" style={{ marginTop: "14rem", width:"100%" }}>
          <Footer />
        </div>
          <div className="" style={{ marginTop: "14rem", width:"100%" }}>
        <Task4 />
        </div>
    </>
  );
}

export default Section;
