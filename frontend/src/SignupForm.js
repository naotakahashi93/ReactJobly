import React, { useState, useContext} from "react";
import {useHistory} from "react-router-dom"
import userContext from "./context/userContext";


const SignupForm = () => {

    const INITIAL_STATE =   {firstName: "",
                            lastName:"",
                            email: "", 
                            username: "",
                            password:""
                            }

    const [signupForm, setSignupForm] = useState(INITIAL_STATE)
    const {registerUser} = useContext(userContext)
    const history = useHistory();

    const handleChange = (e) => {
        const {name, value} = e.target; // extracting e.target.name and e.target.value 
        setSignupForm(signupForm =>(
            {
                ...signupForm,
                [name]: value
            }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        registerUser(signupForm)
        console.log(signupForm)
        setSignupForm(INITIAL_STATE);
        history.push("/");
    }

    return(
       <>
       <br></br>
       <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <br></br>
            <input id="firstName" name="firstName"value={signupForm.firstName} onChange={handleChange} /> 
            <br></br>
            <label htmlFor="lastName">Last Name:</label>
            <br></br>
            <input id="lastName" name="lastName"value={signupForm.lastName} onChange={handleChange} /> 
            <br></br>
            <label htmlFor="username">Username:</label>
            <br></br>
            <input id="username" name="username"value={signupForm.username} onChange={handleChange} /> 
            <br></br>
            <label htmlFor="password">Password:</label>
            <br></br>
            <input type="password" id="password" name="password"value={signupForm.password} onChange={handleChange} /> 
            <br></br>
            <label htmlFor="email">Email:</label>
            <br></br>
            <input id="email" name="email"value={signupForm.email} onChange={handleChange} /> 
            <br></br>
       <button>Register!</button>
    </form>
       </>
    )
}

export default SignupForm;