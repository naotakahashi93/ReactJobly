import React, { useState, useContext } from "react";
import userContext from "./context/userContext";
import JobCard from "./JobCard";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";


const Profile = () => {
    const {username, userDetails, editUser, jobsApplied, changesConfirmed} = useContext(userContext)
    // console.log(jobsApplied, "JOBS APPLIED PROFULE")

    const INITIAL_STATE =   username 
                            ?
                            {firstName: userDetails.firstName,
                            lastName:userDetails.lastName,
                            email: userDetails.email
                            }
                            :
                            {}
                            

    const [profileForm, setProfileForm] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target; // extracting e.target.name and e.target.value 
        setProfileForm(profileForm =>(
            {
                ...profileForm,
                [name]: value
            }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        editUser(profileForm)
    }

    return(
       <>
        {username 
        ?
       <form onSubmit={handleSubmit}>
            <p>Username: {username}</p>
            <p>Edit your details:</p>
            <label htmlFor="firstName">First Name:</label>
            <br></br>
            <input id="firstName" name="firstName" value={profileForm.firstName} onChange={handleChange} /> 
            <br></br>
            <label htmlFor="lastName">Last Name:</label>
            <br></br>
            <input id="lastName" name="lastName"value={profileForm.lastName} onChange={handleChange} /> 
            <br></br>
            <label htmlFor="email">Email:</label>
            <br></br>
            <input id="email" name="email"value={profileForm.email} onChange={handleChange} /> 
            <br></br>
       <button>Update!</button>
            <p>{changesConfirmed ? "changes updated!" : ""}</p>
       <h4> Jobs you've applied to: </h4>
       {jobsApplied.map(j => <JobCard id={j.job_id} title={j.title} key={uuidv4()}/>)}
    </form>
        :
        <h3>
        Please <Link to="/login">LOGIN</Link> or <Link to="/signup">REGISTER</Link> first!
        </h3>
        }
       </>
    )
}

export default Profile;