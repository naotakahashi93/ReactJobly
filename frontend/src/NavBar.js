import React, { useContext} from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'
import userContext from "./context/userContext";
import JoblyLogo from "./images/JOBLYLOGO.png"

function NavBar() {
  const loggedInUser = useContext(userContext)
  // console.log(loggedInUser, "LOGGED IN USER")
  return (
    <div id="bardiv">
        {loggedInUser.username 
        ? 
      <>
        <NavLink id="joblyhome" exact to="/"  >
          <img src={JoblyLogo}></img>
        </NavLink>
        <div id="menudiv" >
        <NavLink to="/companies" > 
            ALL COMPANIES
        </NavLink>
        <NavLink to="/jobs" > 
            ALL JOBS
        </NavLink>
        <NavLink to="/profile" > 
            PROFILE
        </NavLink>
        <NavLink to="/" onClick={loggedInUser.logoutUser}> 
           <button id="logoutlink"> LOGOUT ({loggedInUser.username}) </button>
        </NavLink>
        </div> 
      </>
      : 
      <>
        <NavLink id="joblyhome" exact to="/"  >
        <img src={JoblyLogo}></img>
        </NavLink>
        <div id="menudiv" >
        <NavLink to="/login" > 
            LOGIN
        </NavLink>
        <NavLink to="/signup"> 
            SIGN UP
        </NavLink>
        </div> 
      </>
        }
      
    </div>
  );
}

export default NavBar;
