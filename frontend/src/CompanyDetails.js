import React, { useContext, useEffect, useState }from "react";
import { useParams, Link } from "react-router-dom";
import CompaniesContext from "./context/CompaniesContext";
import NotFound from "./NotFound";
import JoblyApi from "./api";
import { v4 as uuidv4 } from 'uuid';
import userContext from "./context/userContext";

const CompanyDetails = () => {
    const [companyDeets, setCompanyDeets] = useState()
    const {compid} = useParams()
    const allCompanies = useContext(CompaniesContext)
    // console.log(allCompanies, "DETAILS COMPANY")
    const loggedInUser = useContext(userContext)
    
    let comp = allCompanies.find(c => c.handle === compid)
    // console.log(comp, "COMP FOUND ")

    useEffect(() =>{
        async function getCompDetails(){
            let details = await JoblyApi.getCompany(comp.handle)
            setCompanyDeets(details)
        }
        getCompDetails()
    },[comp])

    if(!comp) return <NotFound notfound={compid}/>

    return(
        <>
        {loggedInUser.username
        ?
        <>
        {companyDeets ? <div id="carddiv"> 
                        <h3>{companyDeets.name}</h3>
                        <h5>{companyDeets.description}</h5>
                        <p>Number of Employees: {companyDeets.numEmployees}</p>
                        <p>Job Postings: </p>
                            {companyDeets.jobs.map(j=> <div key={uuidv4()} style={{borderStyle:"solid", borderColor:"#80DED9", backgroundColor:"white", margin:"2%"}}>
                                                        <Link to={`/jobs/${j.id}`}><p>{j.title}</p></Link>
                                                        <p>Salary: {j.salary}</p>
                                                        <p>Equity: {j.equity}</p>
                                                        </div>
                                                        )}
                        </div> 
                        : 
                        <p> loading details...</p>}
        </>
        :
        <h3>
        Please <Link to="/login">LOGIN</Link> or <Link to="/signup">REGISTER</Link> first!
        </h3>}
        
        </>
        
    )
}

export default CompanyDetails;