import React, { useContext, useEffect, useState }from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import jobsContext from "./context/JobsContext";
import NotFound from "./NotFound";
import JoblyApi from "./api";
import userContext from "./context/userContext";


const JobDetails = () => {
    const [jobDeets, setJobDeets] = useState()
    const {jobid} = useParams()
    const allJobs = useContext(jobsContext)
    const {username, applyToJob, jobsApplied} = useContext(userContext)
    let applied = jobsApplied.find(j => j.job_id == jobid)

    // console.log(allCompanies, "DETAILS COMPANY")
    let job = allJobs.find(j => j.id == jobid)

    // console.log(allJobs, "ALL JOBS", jobid, "JOBID", job, "FOUND JOB")
    useEffect(() =>{
        async function getJobDetails(){
            let details = await JoblyApi.getJob(jobid)
            setJobDeets(details)
        }
        getJobDetails()
    },[job])

    if(!job) return <NotFound notfound={jobid}/>

    return(
        <>
        {username 
        ?
        <>
        {jobDeets ? <div id="carddiv"> 
                        <h3>{jobDeets.title}</h3>
                        <h5>Job Id: {jobDeets.id}</h5>
                        <p>Salary: {jobDeets.salary}</p>
                        <p>Equity: {jobDeets.equity}</p>
                        <h5>Company Details</h5>
                            <p>Company Name: <Link to={`/companies/${jobDeets.company.handle}`}>{jobDeets.company.name}</Link></p>
                            <p>Company Description: {jobDeets.company.description}</p>
                            <p>Number of Employees: {jobDeets.company.numEmployees}</p>
                        {applied && applied.job_id == jobid
                        ?
                        <button id="appliedbtn">APPLIED</button>
                        :
                        <button onClick={()=>applyToJob(jobid)}>APPLY TO THIS JOB</button>
                        }
                        </div> 
                        : 
                        <p> loading details...</p>}
        </>
        :
        <h3>
        Please <Link to="/login">LOGIN</Link> or <Link to="/signup">REGISTER</Link> first!
        </h3>
        }
        </>
        )
    
        
}

export default JobDetails;