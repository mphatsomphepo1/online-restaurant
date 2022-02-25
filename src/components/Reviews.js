import React from 'react';

import "../styles/Reviews.css";

import Reviewer1 from "../assets/mpha.jpg";
import Reviewer2 from "../assets/profile-1.jpg";
import Reviewer3 from "../assets/profile-2.jpg"
function Reviews() {
  return (
    <div>
      <section className="review" id="review">

<div className="container">

<h1 className="heading"><span>'</span> people's review <span>'</span></h1>

<div className="box-container">

    <div className="box" data-aos="fade-right">
        <p>Great work!</p>
        <h3>Mphamphe</h3>
        <span>Feb 24, 2022</span>
        <img src={Reviewer1} alt=""></img>
    </div>

    <div className="box" data-aos="fade-up">
        <p>Amazing development!</p>
        <h3>Mphaben</h3>
        <span>Feb 24, 2022</span>
        <img src={Reviewer2} alt=""></img>
    </div>

    <div className="box" data-aos="fade-left">
        <p>Tested your food it's so Delicious!</p>
        <h3>Jamie</h3>
        <span>Jan 24, 2022</span>
        <img src={Reviewer3} alt=""></img>
    </div>

</div>

</div>

</section>  
      
    </div>
  );
}

export default Reviews;
