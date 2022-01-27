import React from "react";
import "./SearchTable.css"

function SearchTable(){
    return(
        <div className="tableSearchContainer">
        <h2>Market is down 0.80%</h2>
        <div className="tableSearchContainer__btns">
        <button>24h <i class="fas fa-angle-down"></i></button>
        <button>Top gainers <i class="fas fa-angle-down"></i></button>
        </div>
        </div>
    )
}

export {SearchTable}