import React from "react";
import icon from "../src/image/logo512.png";
// import {NavLink} from "react-router-dom"
import Component from "./Component";

const Home = () => {
  return (
    <>
        <Component 
           name=' Learn React with  ' 
           imgsrc={icon} 
           visit="/service" 
           btname="Get Started"
           h2="Learn latest technologies at great price with live Projects."
        />
    </>
  );
};
export default Home;
