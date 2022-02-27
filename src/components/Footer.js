import React from 'react';
import '../styles/Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
faFacebook,
faInstagram,
faWhatsapp
} from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div style={{marginTop:"0x",height:"flex"}}>
	    <footer className="footer_widget" style={{height:"flex"}}>
		<ul>
			<div className="location">
				<h4>Location</h4>
				<ul>
					<li>Umodzi</li>
					<li>Chirunga</li>
					<li>Kamuzu</li>
          <li>Chikanda</li>
					<img src=""/>
				</ul>
			</div>
			<div className="company">
				<h4>Company</h4>
				<ul id="comp_list">
					<a id="comp_item1" href="#Our_Story"><li>Our Story</li></a>
					<a id="comp_item2" href="#Mission"><li>Mission</li></a>
					<a id="comp_item3" href="#Journal"><li>Journal</li></a>
					<a id="comp_item4" href="#Careers"><li>Careers</li></a>
				</ul>
			</div>
			<div className="Support">
				<h4>Support</h4>
				<ul id="sup_list">
					<a id="sup_item1" href="#FAQ"><li>FAQ</li></a>
					<a id="sup_item2" href="#Contact_Us"><li>Contact Us</li></a>
					<a id="sup_item3" href="#Policies"><li>Policies</li></a>
				</ul>
			</div>
			<div className="studio">
				<h4>Online Restaurant</h4>
					<p>We are Online Restaurant we Deliver Awsome 
					Food on your destination</p>
			</div>
			<div className="social">
            <ul>
                <li><a href="https://www.facebook.com/" className="Facebook"><FontAwesomeIcon icon={faFacebook} size="2x"/></a></li>
                <li><a href="https://web.whatsapp.com/" className="whatsapp"><FontAwesomeIcon icon={faWhatsapp} size="2x"/></a></li>
                <li><a href="https://www.instagram.com/" className="Insta"><FontAwesomeIcon icon={faInstagram} size="2x"/></a></li>
            </ul>
        </div>
		</ul>
		<p className="rights">2022 Online Restaurant - All Rights Reserved</p>
		
	</footer>
</div>
    );
}
export default Footer;

