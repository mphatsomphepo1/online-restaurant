import React, { useEffect, useState, Component} from 'react'
import ContactImage from "../assets/contact.jpg";
import Axios from 'axios';
import "../styles/Contact.css";


function Contact() {

  const url = "https://onlinerestaurantapi.herokuapp.com/swagger-ui.html"
  const [customer, setCustomer] = useState({
    fullName:"",
    email:"",
    message:""
  })

  function submit(e){
    e.preventDefault();
    Axios.post(url ="https://onlinerestaurantapi.herokuapp.com/swagger-ui.html",{
      fullName: customer.fullName,
      email: customer.email,
      message: customer.message
    })
    .then(res=>{
      console.log(res.customer)
    })
  }

  function handle(e){
    const newcustomer = { ...customer }
    newcustomer[e.target.name] = e.target.value
    setCustomer(newcustomer)
    console.log(newcustomer)

  }
  return (
    <div className="contact">
        <div className="leftSide"
        style={{ backgroundImage: `url(${ContactImage})`}}></div>
        <div className="rightSide">
            <h1> Contact Us</h1>
            <form  onSubmit={(e)=> submit(e => !e)} id="contact-from">
                <label htmlFor="name">Full Name</label>
                <input onChange={(e)=> handle(e)} name="fullName" value={customer.name} placeholder="Enter full name" type="text"/>
                <label htmlFor="email">Email</label>
                <input onChange={(e)=> handle(e)} name="email" value={customer.email} placeholder="Enter email" type="email"/>
                <label htmlFor="message">Message</label>
                <textarea onChange={(e)=> handle(e)} name="message" value={customer.message}rows="5" placeholder="Enter message" name="message" required>

                </textarea>
                <button type="submit"> Send Message</button>
            </form>
        </div>
      
    </div>
  );
}

export default Contact;