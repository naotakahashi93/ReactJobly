import React, { useState } from "react";

const SearchForm = ({searchFilter}) =>{
    const [searchQuery, setSearchQuery] = useState({name:"", minEmployees:0, maxEmployees:0})

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
        searchFilter(searchQuery);
        setSearchQuery({name:"", minEmployees:0, maxEmployees:0});
    }

    // console.log(searchQuery, "SEEARCH QUERRY")
    return (
        <>        
     <form onSubmit={handleSubmit}>
        <label htmlFor="name">Search By Name:</label>
        <br></br>
        <input id="name" name="name"value={searchQuery.name} onChange={handleChange} /> 
        <br></br>
        <label htmlFor="minEmployees">Minimum Employees:</label>
        <br></br>
        <input id="minEmployees" name="minEmployees" value={searchQuery.minEmployees}onChange={handleChange} /> 
        <br></br>
        <label htmlFor="maxEmployees">Maximum Employees:</label>
        <br></br>
        <input id="maxEmployees" name="maxEmployees" value={searchQuery.maxEmployees} onChange={handleChange} /> 
        <br></br>
        <button>Search!</button>
     </form>
        </>

    )

}

export default SearchForm;