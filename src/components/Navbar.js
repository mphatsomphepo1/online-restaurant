import React from 'react';
import Logo from "../assets/logo.png";
function Navbar(){
	return (
		<div className="navbar">
		<div className="leftSide">
		<img src={Logo}/>
		</div>
		<div className="rightSide">
		</div>
		</div>
	);
}

export default Navbar;