import React, { useState} from 'react'
import ContactImage from "../assets/contact.jpg";

import "../styles/Contact.css";


function Contact() {

  // const url = "http://localhost:8080/api/v1/customer"
  // const [customer, setCustomer] = useState({
  //   fullName:"",
  //   email:"",
  //   message:""
  // })

  // function submit(e){
  //   e.preventDefault();
  //   Axios.post(url ="http://localhost:8080/api/v1/customer",{
  //     fullName: customer.fullName,
  //     email: customer.email,
  //     message: customer.message
  //   })
  //   .then(res=>{
  //     console.log(res.customer)
  //   })
  // }

  // function handle(e){
  //   const newcustomer = { ...customer }
  //   newcustomer[e.target.name] = e.target.value
  //   setCustomer(newcustomer)
  //   console.log(newcustomer)

  // }

  const[age, setAge] = useState('')
  const[dob, setDob] = useState('')
  const[email, setEmail] = useState('')
  const[id, setId] = useState('')
  const[name, setName] = useState('') 

  const handleClick=(e)=>{
    e.preventDefault()
    const customer ={age,dob,email,id,name}
    console.log(customer)

    fetch("http://localhost:8080/api/v1/customer",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(customer)
    }).then(()=>{
      console.log("New customer contact")

      })
     

  }
  return (
    <div className="contact">
        <div className="leftSide"
        style={{ backgroundImage: `url(${ContactImage})`}}></div>
        <div className="rightSide">
            <h1> Contact Us</h1>
            <form  onSubmit={(e)=> submit(e => !e)} id="contact-from">

                <label htmlFor="age"> Enter your age</label>
                <input name="age" placeholder="Enter your age" type="number"
                 value={age}
                 onChange={(e)=>setAge(e.target.value)}/>

                <label htmlFor="date">Date of Birth</label>
                <input type="text" name="input" placeholder="YYYY-MM-DD" required 
                      pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))" 
                      title="Enter a date in this format YYYY-MM-DD"
                 value={dob}
                 onChange={(e)=>setDob(e.target.value)}/>
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter email" type="email"
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}/>

                 <label htmlFor="id" > Id</label>
                 <input name="id" placeholder="Enter Id" type="id"
                  value={id}
                  onChange={(e)=>setId(e.target.value)}/>

                <label htmlFor="name">Name</label>
                <input name="name" placeholder="Enter name" type="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}/>
                
                <button type="submit" onClick={handleClick}> Submit</button>
            </form>
        </div>
      
    </div>
  );
}

export default Contact;