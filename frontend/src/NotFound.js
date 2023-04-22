import React from "react";
import { useHistory } from "react-router-dom";

const NotFound =({notfound}) =>{
    let history = useHistory();
    return(
        <>
        <div >
            <h1> 404 ☹️ </h1>
            <p> Nothing found with the name/id: {notfound}</p>
            <button onClick={() => history.goBack()}>Go back</button>
        </div>
        </>
    )
}

export default NotFound;