import React, { useState} from 'react';
import "../styles/SignIn.css";
import ContactImage from "../assets/contact.jpg";

function SignIn() {

  const[menuId, setMenuId] = useState('')
  const[info, setInfo] = useState('')
  const[type, setType] = useState('')

  const handleClick=(e)=>{
    e.preventDefault()
    const menu ={menuId,info,type}
    console.log(menu)

    fetch("http://localhost:8080/api/v1/menus",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(menu)
    }).then(()=>{
      console.log("New Menu Registered")

      })
     

  }

  
  return (
    <div className="signin">
    <div className="leftSide"
    style={{ backgroundImage: `url(${ContactImage})`}}></div>
    <div className="rightSide">
        <h1>Add Menu</h1>
        <form id="contact-from">
            <label htmlFor="id">Menu Id</label>
            <input name="menuId" placeholder="Enter menu Id" type="number"
            value={menuId}
            onChange={(e)=>setMenuId(e.target.value)}
             />
            <label htmlFor="info"> Menu Info</label>
            <input name="info" placeholder="Enter Menu Info" type="info"
            value={info}
            onChange={(e)=>setInfo(e.target.value)} 
            />
            <label htmlFor="type">Menu Type</label>
            <input name="type" placeholder="Type" type="text"
            value={type}
            onChange={(e)=>setType(e.target.value)}
             />
            
  
           <button type="submit" onClick={handleClick}> Submit</button>
        </form>
    </div>
  
</div>
  );
}

export default SignIn;
