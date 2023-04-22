import React, { useState, useContext } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard"
import { v4 as uuidv4 } from 'uuid';
import CompaniesContext from "./context/CompaniesContext";
import SearchForm from "./SearchForm";
import userContext from "./context/userContext";
import { Link } from "react-router-dom";

const Companies = () => {

  const allCompanies = useContext(CompaniesContext)
  const {username} = useContext(userContext)

  const [filteredCompanies, setFilteredCompanies] =useState({})
  const [error, setError] = useState()

  async function searchFilter(searchqueries){
    try{
    let filterres = await JoblyApi.request("companies", searchqueries)
    setFilteredCompanies(filterres.companies)
    setError("")
    }
    catch(e){
      setError(e[0])
    }
  }
  // console.log(filteredCompanies, "FILTA")
    return(
      <>
      {username 
      ?
      <>
      <br></br>
        <SearchForm searchFilter={searchFilter}/>
        {/* {allCompanies ? 
        allCompanies.map(c => <CompanyCard handle={c.handle} name={c.name} description={c.description} numEmployees={c.numEmployees} key={uuidv4()}/>)
        :
        <p>loading</p>} */}
        {error && error == "instance.name does not meet minimum length of 1" 
        ? 
        <p> Name field is required </p> 
        : 
        <p>{error}</p>}

        {filteredCompanies.length 
          ? 
          <p>Filtered results ({filteredCompanies.length} results found)</p>:
          <p><b>All Companies ({allCompanies.length})</b></p>
        }

        {filteredCompanies.length 
          ? 
          filteredCompanies.map(c => <CompanyCard handle={c.handle} name={c.name} description={c.description} numEmployees={c.numEmployees} key={uuidv4()}/>) 
          :
          allCompanies.map(c => <CompanyCard handle={c.handle} name={c.name} description={c.description} numEmployees={c.numEmployees} key={uuidv4()}/>)
        }
        <button onClick={() => setFilteredCompanies({})} >Back to All Companies</button>
         {/* {filteredCompanies ? 
        filteredCompanies.map(c => <CompanyCard handle={c.handle} name={c.name} description={c.description} numEmployees={c.numEmployees} key={uuidv4()}/>)
        :
        <p>loading</p>} */}
      </>
      :
      <h3>
        Please <Link to="/login">LOGIN</Link> or <Link to="/signup">REGISTER</Link> first!
      </h3>

    }
       </>
    )
}

export default Companies;