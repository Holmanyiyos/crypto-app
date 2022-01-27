import React from "react";
import "./Header.css"

function Header(){
    return(
        <header>
            <h1>Overview</h1>
            <div className="searchHeader">
                <div className="searchInputContainer">
                <input type="text" />
                <button><i class="fas fa-search"></i></button>
                </div>
                <i class="far fa-bell"></i>
                <div className="profile">
                <i class="fas fa-user-circle"></i>
                <span>Holman P.</span>
                <i class="fas fa-chevron-down"></i>
                </div>
            </div>
        </header>
    )
}

export {Header}