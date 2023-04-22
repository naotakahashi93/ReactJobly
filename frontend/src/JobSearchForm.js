import React, { useState } from "react";

const JobSearchForm = ({searchJobFilter}) =>{
    const [searchQuery, setSearchQuery] = useState({title:"", hasEquity:"choosehere", minSalary:0})

    const handleChange = (e) => {
        const {name, value} = e.target; // extracting e.target.name and e.target.value 
        setSearchQuery(searchQuery =>(
            {
                ...searchQuery,
                [name]: value
            }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        searchJobFilter(searchQuery);
        setSearchQuery({title:"", hasEquity:"choosehere", minSalary:0});
    }


    // console.log(searchQuery, "SEEARCH QUERRY")
    return (
        <>        
     <form onSubmit={handleSubmit}>
        <label htmlFor="title">Search By Title:</label>
        <br></br>
        <input id="title" name="title"value={searchQuery.title} onChange={handleChange} /> 
        <br></br>
        <label htmlFor="hasEquity">Has Equity:</label>
          <br></br>
            <select id="hasEquity" name="hasEquity" value={searchQuery.hasEquity} onChange={handleChange}>
                <option value="choosehere" defaultValue>Choose here</option>
                <option value="true">Yes</option>
            </select>
            {/* <input id="hasEquity" name="hasEquity"  />  */}
        <br></br>
        <label htmlFor="minSalary">Minimum Salary:</label>
        <br></br>
        <input id="minSalary" name="minSalary" value={searchQuery.minSalary} onChange={handleChange} /> 
        <br></br>
        <button>Search!</button>
     </form>
        </>

    )

}

export default JobSearchForm;