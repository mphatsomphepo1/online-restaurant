import React from 'react';
import "../styles/SignIn.css";
import ContactImage from "../assets/contact.jpg";

function SignIn() {
  return (
    <div className="signin">
    <div className="leftSide"
    style={{ backgroundImage: `url(${ContactImage})`}}></div>
    <div className="rightSide">
        <h1> Sign In</h1>
        <form id="contact-from" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name" type="text"/>
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email" type="email"/>
            <label htmlFor="message">Password</label>
            <input type="password" placeholder="Password" />
            
            <div className="checkbox">
             <input type="checkbox" />
             <span>Remember Me</span>
           </div>
           <button type="submit"> SignIn</button>
           <div className="links">
             <span>Forgot Password? <a href="">Click Here</a></span>
             <span>Don't Have An Account? <a href="">Create One</a></span>
          </div>
        </form>
    </div>
  
</div>
    // <div>
    //   <form>
    //     <input type="search" placeholder="Search your item" />
    //     <div className='Search'>
    //     <button className="button"><i className="bx bx-search"> Search</i></button></div>
    //   </form>


    //   <div className="wrapper">
    //     <form action="" className="form">
    //       <h2>SIGN IN</h2>

    //       <div className="control">
    //         <label for="">Enter Email:</label>
    //         <input type="email" placeholder="Enter Your Email" />
    //       </div>
    //       <div className="control">
    //         <label for="">Password:</label>
    //         <input type="password" placeholder="Password" />
    //       </div>
    //       <div className="checkbox">
    //         <input type="checkbox" />
    //         <span>Remember Me</span>
    //       </div>
    //       <button className="btn">Sign In</button>
    //       <div className="links">
    //         <span>Forgot Password? <a href="">Click Here</a></span>
    //         <span>Don't Have An Account? <a href="">Create One</a></span>
    //       </div>
    //     </form>
    //   </div>
    //  </div>
  );
}

export default SignIn;
