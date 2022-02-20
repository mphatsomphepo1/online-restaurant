import React, {useState} from 'react';
import LogoRestaurant from "@material-ui/icons/Restaurant";
import Logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
function Navbar(){

	const [openLinks, setOpenLinks] = useState(false);
	const toggleNavbar = () => {
		setOpenLinks(!openLinks);
	};
	return (
		<div className="navbar">
		<div className="leftSide" id={openLinks? "open" : "close"}>
		{/* <img src={Logo}/> */}
		 <h1> <LogoRestaurant/> Online Restaurant</h1>
		<div className="hiddenLinks">
		<Link to="/">Home</Link>
			<Link to="/menu">Menu</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/signin">Sign In</Link>
		</div>
		</div>
		<div className="rightSide">
			<Link to="/">Home</Link>
			<Link to="/menu">Menu</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/signin">Sign In </Link>
			<button onClick={toggleNavbar}>
			<ReorderIcon/>
			</button>
		</div>
		</div>
	);
}

export default Navbar;