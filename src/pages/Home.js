import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/dessert.jpg";
import "../styles/Home.css";
import Reviews from '../components/Reviews';

function Home() {
  return (<>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer">
        <h1> Online Restaurant Website </h1>
        <p> TASTE THE GOODNESS OF YUMMY FOOD </p>
        
        <Link to="/menu"> 
        <button>ORDER NOW</button>
        </Link>
       
      </div>
      </div>
      
      <Reviews/>
      
      </>
  );
}

export default Home;