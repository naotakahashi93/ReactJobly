import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "./Card.css"



const CompanyCard = ({handle, name, description, numEmployees}) =>{


    return(
        <>
        <div id="carddiv">
            <Link to={`companies/${handle}`}><b>{name}</b></Link> 
            <p><b>Company Description: </b>{description}</p>
            <p><b>Number of Employees: </b>{numEmployees}</p>
        </div>
        </>
    )
}

export default CompanyCard;