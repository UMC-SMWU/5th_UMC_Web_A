import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function MovieDetail() {

    const {title} = useParams();
    const {state} = useLocation();
    console.log(title);
    console.log(state);
    
    return (
        <div className="page-container" style={{display: "flex", margin: "50px"}}>
            <div>
                <img src={"https://image.tmdb.org/t/p/w500" + state.poster_path} alt="poster img" style={{width: "300px"}} />
            </div>
            <div style={{fontSize: "20px", marginLeft: "10px"}}>
                {title}
            </div>
        </div>
    );

}