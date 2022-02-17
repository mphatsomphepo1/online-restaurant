import React from 'react'
import Cocktail from "../assets/cocktail.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
        <div className="aboutTop" 
        style={{ backgroundImage: `url(${Cocktail})`}}></div>
        <div className="aboutBottom">
            <h1> ABOUT US</h1>
            <p>This system is designed in a such a way
                 that people will be order to press their orders
                  on the website and then the restaurant 
                  will get notified of the order and then ask the customer 
                  to pay for the order through the mode of payment of 
                  his/her choice. Then after, the food will be prepared 
                  for the customer. When the food is ready, the system 
                  will be able to ask the customer if he/she wants the 
                  food to be delivered or not. The most interesting thing 
                  about this website is that people will also be able to 
                  comment on the food being offered through the comment 
                  section and also other restaurants will be able to come 
                  on this site and advertise their food but then these 
                  people will need to sign in into the system and they will 
                  be given some privileges. This system will be able to 
                  accommodate as many users as possible and the data will be 
                  stored using a database (MYSQL). This system
                 will be developed using HTML, JAVA, CSS and JAVA SCRIPT.</p>
        </div>
      
    </div>
  );
}

export default About;
