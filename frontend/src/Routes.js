import React, { useEffect, useState }  from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import CompanyDetails from "./CompanyDetails";
import JobDetails from "./JobDetails";
import Jobs from "./Jobs";
import Login from "./Login";
import SignupForm from "./SignupForm";
import Profile from "./Profile";
import JoblyApi from "./api";
import CompaniesContext from "./context/CompaniesContext";
import jobsContext from "./context/JobsContext"

const Routes = () => {
    const [allCompanies, setAllCompanies] = useState([])
    const [allJobs, setAllJobs] = useState([])

    useEffect( () => {
      async function getAllCompanies(){
        let allcompanies = await JoblyApi.request("companies")
        setAllCompanies(allcompanies.companies)
      }
      async function getAllJobs(){
        let alljobs = await JoblyApi.request("jobs")
        // console.log(alljobs, "ALLL JOBSSS")
        setAllJobs(alljobs.jobs)
      }
      getAllCompanies()
      getAllJobs()
      },[])
  
    //   console.log(allCompanies, "ROUTEHOME")

    return(
        <Switch>
            <CompaniesContext.Provider value={allCompanies}>
            <jobsContext.Provider value={allJobs}>
                <Route exact path="/">
                    <Home/> 
                </Route>

                <Route exact path="/companies">
                    <Companies/> 
                </Route>

                <Route exact path="/companies/:compid">
                    <CompanyDetails/>
                </Route>

                <Route exact path="/jobs">
                    <Jobs />
                </Route>

                <Route exact path="/jobs/:jobid">
                    <JobDetails />
                </Route>

                <Route exact path="/login">
                    <Login/> 
                </Route>

                <Route exact path="/signup">
                    <SignupForm/> 
                </Route>

                <Route exact path="/profile">
                    <Profile />
                </Route>
          </jobsContext.Provider>
          </CompaniesContext.Provider>
      </Switch>
    )
}

export default Routes;