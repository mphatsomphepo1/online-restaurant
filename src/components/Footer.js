import React from 'react'
import LogoRestaurant from "@material-ui/icons/Restaurant";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
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
            <a href="">About Us</a>
            <a href="">Blog</a>
            <a href="">All Products</a>
            <a href="">Locations Map</a>
          </div>
          <div>
            <h4>Services</h4>
            <a href="">Order tracking</a>
            <a href="">Wish List</a>
            <a href="">My account</a>
            <a href="">Terms & Conditions</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="">FAQ</a>
            <a href="">Policy </a>
            <a href="">Business</a>
            <a href="">Support Carrer</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="">WhatsApp</a>
            <a href="">Support 24 </a>
            <a href="">Quick Chat</a>
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
