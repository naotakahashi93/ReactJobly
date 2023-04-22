
import './App.css';
import React, { useEffect, useState } from "react";
import NavBar from './NavBar';
import userContext from "./context/userContext"
import Routes from "./Routes";
import JoblyApi from './api';


function App() {
  const [username, setUsername] = useState(() => { 
    let value = (localStorage.getItem("username") || null)// getting the state of the item we have in local storage or set it to null
    return value
})
  const [token, setToken] = useState( () => { 
    let value = (localStorage.getItem("token") || null)
    return value
})

  const [userDetails, setUserDetails] = useState( () => { 
    let value = (JSON.parse(localStorage.getItem("userDeets"))|| null)
    return value
})

  const [changesConfirmed, setChangesConfirmed ] = useState(false)

  const [jobsApplied, setJobsApplied] = useState([])
  const [jobsAppliedLen, setJobsAppliedLen] = useState(jobsApplied.length)

  async function registerUser(data){
    let returntoken = await JoblyApi.request("auth/register", data, "post")
    loginUser({username: data.username, 
              password: data.password})
    // setToken(returntoken.token)
    // setUsername(returntoken.userDetails.username)
    // JoblyApi.token = returntoken.token
    // localStorage.setItem("username", data.username);
    // localStorage.setItem("token", returntoken.token);
  }

  async function loginUser(data){
    let returntoken = await JoblyApi.request("auth/token", data, "post")
    // console.log(returntoken, "RETURN TOKEN FROM LOGIN")
     setUsername(returntoken.userDetails.username)
     setToken(returntoken.token)
     setUserDetails(returntoken.userDetails)
     setJobsAppliedLen(jobsApplied.length)
     JoblyApi.token = returntoken.token
    localStorage.setItem("username", returntoken.userDetails.username);
    localStorage.setItem("token", returntoken.token);
    localStorage.setItem("userDeets", JSON.stringify(returntoken.userDetails))
  }

  function logoutUser(){
    localStorage.clear()
    setToken(null)
    setUsername(null)
    setJobsApplied([])
  }

  useEffect (() =>{
    if (username){
    async function getJobsApplied(){
    JoblyApi.token = token
    let jobsapplied = await JoblyApi.jobsApplied(username)
    // console.log(jobsapplied, "JOBS APPLIED FROM DATABASEE", jobsAppliedLen, "JOB LENGTHH IN USE EFFECT")
    setJobsApplied(jobsapplied)
    }
    getJobsApplied()
  }},[jobsAppliedLen, username]

)

  async function editUser(data){
    // console.log(data, "DATA")
    JoblyApi.token = token
    let returnUser = await JoblyApi.getUser(username, data)
    // console.log(returnUser, "RETURN USER FROM PROFILE EDIT")
    localStorage.setItem("userDeets", JSON.stringify(returnUser.user))
    setUserDetails(returnUser.user)
    returnUser.user ? setChangesConfirmed(true) : setChangesConfirmed(false)
  }

  async function applyToJob(id){
    JoblyApi.token = token
    let applied = await JoblyApi.apply(username, id )
    console.log(applied, "APPLIED")
    let jobsapplied = await JoblyApi.jobsApplied(username)
    setJobsApplied(jobsapplied)
    localStorage.setItem("JobsApplied", [...jobsApplied, id])
    setJobsAppliedLen(jobsApplied.length)
  }


  

  // console.log(token, "TOKEN", JoblyApi.token, "JoblyApi.token", username, userDetails, "USER DETAILSSS")
  // console.log(jobsApplied, "JOBS APPLIED", jobsAppliedLen, "JOBS APPLIED LENGTH")

  return (
    <div className="App">
      <userContext.Provider value={{username, 
                                    registerUser, 
                                    loginUser, 
                                    token, 
                                    logoutUser, 
                                    editUser, 
                                    userDetails, 
                                    applyToJob, 
                                    jobsApplied,
                                    changesConfirmed}}>
        <NavBar />
        <Routes />
      </userContext.Provider>
    </div>
  );
}

export default App;
