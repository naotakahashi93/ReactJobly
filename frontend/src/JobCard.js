import React,{useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import userContext from "./context/userContext";
import "./Card.css"

const JobCard = ({id, title, company, salary, equity}) =>{
      const {applyToJob, jobsApplied} = useContext(userContext)

    //   const [applied, setApplied] = useState({})
        // let applied = jobsApplied.find(j => j.job_id == id)
        // console.log( applied, "APPLIED STATE IN JOB CARD", id, "ID IN JOB CARD")    

        useEffect( ()=>{
            let applied = jobsApplied.find(j => j.job_id == id)
            // console.log( applied, "APPLIED STATE IN JOB CARD", id, "ID IN JOB CARD")  
        }, [jobsApplied]
        )


    return(
        <>
        <div id="carddiv">
            <Link to={`jobs/${id}`}><b>{title}</b></Link>
            {company || salary || equity 
            ?
            <>
            <h5>Company: {company}</h5>
            <p>Salary: {salary}</p>
            <p>Equity: {equity}</p>
            </>
            :
            ""
            }
            {/* <h5>Company: {company}</h5>
            <p>Salary: {salary}</p>
            <p>Equity: {equity}</p> */}
            {jobsApplied.find(j => j.job_id == id) 
            ?
            <button id="appliedbtn">APPLIED</button>
            :
            <button onClick={()=>applyToJob(id)}>APPLY</button>
            }
            
        </div>
        </>
    )
}

export default JobCard;