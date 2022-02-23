import React from 'react'
import LogoRestaurant from "@material-ui/icons/Restaurant";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {Link} from "react-router-dom";
import "../styles/Footer.css";
//import YoutubeIcon from "@material-ui/icons/Youtube";

function Footer() {
  return (
      <>
    <footer class="footer">
      <div class="row container">
        <div class="col">
          <div class="logo d-flex">
            {/* <img src="../assets/logo.png" alt="logo" /> */}
            <h1> <LogoRestaurant/> Online Restaurant</h1>
          </div>
          {/* <p>
            Retail food delivery is a courier service in which a restaurant,
            store, or independent food-delivery
          </p> */}
          {/* <div class="icons d-flex">
            <div class="icon d-flex">
              <i class="bx bxl-facebook"></i>
            </div>
            <div class="icon d-flex"><i class="bx bxl-twitter"></i></div>
            <div class="icon d-flex"><i class="bx bxl-linkedin"></i></div>
          </div> */}
        </div>
        <div class="col">
          <div>
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/">Blog</Link>
            <Link to="/menu">All Products</Link>
            <Link to="/">Locations Map</Link>
          </div>
          <div>
            <h4>Services</h4>
            <Link to="/">Order tracking</Link>
            <Link to="/">Wish </Link>
            <Link to="/">My account</Link>
            <Link to="/">Terms & Conditions</Link>
          </div>
          <div>
            <h4>Support</h4>
            <Link to="/contact">FAQ</Link>
            <Link to="/">Policy </Link>
            <Link to="/">Business</Link>
            <Link to="/">Support Carrer</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <Link to="/">WhatsApp</Link>
            <Link to="/">Support 24 </Link>
            <Link to="/">Quick Chat</Link>
          </div>
        </div>
        
      </div>
      <div className="socialMedia">
            <InstagramIcon/> <TwitterIcon/> <FacebookIcon/> <LinkedInIcon/>
        </div>
        <p> &copy; 2022 onlinerestaurant.com</p>
    </footer>
     </>
  );
}

export default Footer;
