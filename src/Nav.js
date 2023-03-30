import React from "react";
import "./App.css";
import {Link} from 'react-router-dom';
function Nav()
{
    return(
   <div className="App11">
    <nav>
    <Link to='/' className="App9">Home</Link>
    <Link to='/Nakhul' className="App9">Contact Us</Link>
    <Link to='/Loading' className="App9">Loading</Link>
    <Link to='/box' className="App9">Pattern</Link>
    <Link to='/class' className="App9">Class Component</Link>
    </nav>
   </div>
    );
}
export default Nav;