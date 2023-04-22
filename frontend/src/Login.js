import React, { useState, useContext } from "react";
import {useHistory} from "react-router-dom"
import userContext from "./context/userContext";


const Login = () => {

    const history = useHistory();
    const INITIAL_STATE =   {
                            username: "",
                            password:""
                            }

    const [loginForm, setLoginForm] = useState(INITIAL_STATE)
    const {loginUser} = useContext(userContext)

    const handleChange = (e) => {
        const {name, value} = e.target; // extracting e.target.name and e.target.value 
        setLoginForm(loginForm =>(
            {
                ...loginForm,
                [name]: value
            }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        loginUser(loginForm)
        // console.log(loginForm)
        history.push("/");
    }

    return(
       <>
       <br></br>
       <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
             <br></br>
            <input id="username" name="username"value={loginForm.username} onChange={handleChange} /> 
            <br></br>
            <label htmlFor="password">Password:</label>
            <br></br>
            <input type="password" id="password" name="password"value={loginForm.password} onChange={handleChange} /> 
            <br></br>
       <button>Login!</button>
    </form>
       </>
    )
}

export default Login;