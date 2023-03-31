import React from "react";
import Img from './Pardhu.jpeg'
import {Link} from 'react-router-dom';
import './Nav.css';
function Nav()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
             
        <div className="container">
        <Link class="navbar-brand" href="#">
	      <img src={Img} alt="" width="30" height="30" className="d-inline-block align-text-top"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0" id="App25">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Reg" className="nav-link">Registration</Link>
              </li>
              <li className="nav-item">
                <Link to="/Login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link" >Contact Us</Link>
              </li>
                 <li className="nav-item">
                <Link to="/About" className="nav-link">About Us</Link>
              </li>
            </ul>
           </div>
        </div>
        
      </nav>
    );
}
export default Nav;