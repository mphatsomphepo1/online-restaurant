import React from 'react';
import "../styles/Reviews.css";

function Reviews() {
  return (
    <>
          
 <section class="section testimonials" id="testimonials">
      <div class="row container">
        <div class="col">
          <div class="card" data-filter="rosele">
            <div class="d-flex">
              <div class="image">
                <img src="./assets/profile-1.jpg" alt="" />
              </div>
              <div>
                <h4>Rosele Desoza</h4>
                <span>Marketing Coordinator</span>
              </div>
            </div>
          </div>
          <div class="card" data-filter="marvin">
            <div class="d-flex">
              <div class="image">
                <img src="../assets/profile-2.jpg" alt="" />
              </div>
              <div>
                <h4>Mphatso Mphepo</h4>
                <span>Web Developer</span>
              </div>
            </div>
          </div>
          <div class="card" data-filter="guy">
            <div class="d-flex">
              <div class="image">
                <img src="./assets/profile-3.jpg" alt="" />
              </div>
              <div>
                <h4>Guy Hawkins</h4>
                <span>President of Sales</span>
              </div>
            </div>
          </div>
          <div class="card" data-filter="kathryn">
            <div class="d-flex">
              <div class="image">
                <img src="./assets/profile-3.jpg" alt="" />
              </div>
              <div>
                <h4>Kathryn Murphy</h4>
                <span>Marketing Coordinator</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <h2>
            What our Customers <br />
            <span>are saying</span>
          </h2>
          <div class="test-wrapper">
            <div class="testimonial active" data-id="rosele">
              <div class="d-flex">
                <div>
                  <h4>Rosele Desoza</h4>
                  <span>Marketing Coordinator</span>
                </div>

                <div class="rating">
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                </div>
              </div>

              <p>
                “Having good restaurant reviews is crucial these days. It is not
                just making our decision to pick one easier, it is also helping
                the restaurant be more successful. You can quickly copy and
                paste these good restaurant review examples, publish them on
                Facebook”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </>
  );
}

export default Reviews;
