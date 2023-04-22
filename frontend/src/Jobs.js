import React, { useState, useContext, useEffect } from "react";
import JoblyApi from "./api";
import { v4 as uuidv4 } from 'uuid';
import jobsContext from "./context/JobsContext";
import JobSearchForm from "./JobSearchForm";
import JobCard from "./JobCard";
import userContext from "./context/userContext";
import { Link } from "react-router-dom";

const Jobs = () => {

  const allJobs = useContext(jobsContext)
  const {username} = useContext(userContext)

  const [filteredJobs, setFilteredJobs] =useState({})
  const [error, setError] = useState()

  async function searchJobFilter(searchqueries){
    try{
    let filterres = await JoblyApi.request("jobs", searchqueries)
    // console.log(filterres, "FILTA RES")
    setFilteredJobs(filterres.jobs)
    setError("")
}
   
    catch(e){
      setError(e[0])
    }
  }
//   console.log(filteredJobs, "FILTA")

    return(
        <>
        {username 
        ?
            <>
            <br></br>
            <JobSearchForm searchJobFilter={searchJobFilter}/>
    
            {error && error == "instance.title does not meet minimum length of 1" 
            ? 
                <p> Title field is required </p> 
            : 
                <p>{error}</p>}

            {filteredJobs.length 
            ? 
                <p>Filtered results ({filteredJobs.length} results found)</p>
            :
                <p><b>All Jobs ({allJobs.length})</b></p>
            }
            {filteredJobs.length 
            ? 
                filteredJobs.map(j => <JobCard id={j.id} title={j.title} salary={j.salary} equity={j.equity} company={j.companyName} key={uuidv4()}/>) 
            :
                allJobs.map(j => <JobCard id={j.id} title={j.title} salary={j.salary} equity={j.equity} company={j.companyName} key={uuidv4()}/>)
            }
            <button onClick={() => setFilteredJobs({})}>Back to All Jobs</button>
            </>
        :
            <h3>
            Please <Link to="/login">LOGIN</Link> or <Link to="/signup">REGISTER</Link> first!
            </h3>
        }
    </>
    )
}

export default Jobs;