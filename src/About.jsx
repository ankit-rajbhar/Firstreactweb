import React from 'react'
import icon from "../src/image/6308.jpg";
import Component from "./Component";

const About =()=>{
    return (
        <>
           <Component 
           name='Welcome to About page ' 
           imgsrc={icon} 
           visit="/contact" 
           btname="Contact Now"
           h2=" text of the printing and typesetting industry. Lorem Ipsum has been ."
           />
        </>
    );
};
export default About;