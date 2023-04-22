import React , { useContext} from "react";
import { Link } from "react-router-dom";
import userContext from "./context/userContext";
import JoblyImg from "./images/JoblyLandingImg.png"
import "./Home.css"

const Home = () => {
    const loggedInUser = useContext(userContext)

    return(
        <>
        <div id="homediv">
          <div id="imagediv">
            <img id="JoblyImg" src={JoblyImg}></img>
          </div>
            <div id="titlediv">
            {loggedInUser.username
            ?
            <h3 id="welcomebackuser"> Welcome Back, {loggedInUser.username } !</h3>
            :
            ""}
              <div id="titlesloganwrapper">
              <h2 id="titlejobly"> Find your dream job here with - <span id="joblyspan">JOBLY</span></h2>
              <div id="sloganwrapper"><p id="titleslogan">  APPLY, WORK, SUCCEED.</p></div>
              </div>
              {loggedInUser.username
              ?
              ""
              :   
              <>
              <br></br>
              <div id="signuploginwrapper">
              <button id="homesignupbtn"><Link to="/signup" > SIGNUP </Link></button>
              <button id="homeloginbtn"><Link to="/login"> LOGIN </Link></button>
              </div>
              </>
              }
            </div>
        </div>
        </>
        
    )
}

export default Home;