import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import { useNavigate } from 'react-router-dom';
import './app.css';
import Loginbutton from'./loginbutton'
import Registerbutton from "./registerbutton";
import Logoutbutton from "./logoutbutton";



const signedin = localStorage.getItem("signedin") 
console.log(signedin);

const username = localStorage.getItem("users")
 
function Header() {
  
if ((signedin)==="false"){
return ( <div>
    <header className="header">
        <img src="assets/logo.png" alt="Logo" className="logo" />
        <input type="text" placeholder="search" className="search-input" />
        
        
        <div>
          <Loginbutton/>
          <Registerbutton/>
        </div> 
       
      </header> 
      </div>
)
}
else {
  return ( <div>
    <header className="header">
        <img src="assets/logo.png" alt="Logo" className="logo" />
        <input type="text" placeholder="search" className="search-input" />
        <div>
        hello, welcome again
        <Logoutbutton />
        </div>
        
       
      </header> 
      </div>
)
}
}
export default Header;
