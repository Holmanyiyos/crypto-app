import React from "react";
import "./TableItem.css"

function TableItem(){
    return(
        <div className="tableItem">
            <div className="nameContainer">
            <div className="iconTable"></div>
            <div className="name">
                <p>Band Protocol</p>
                <p>BAND</p>
            </div>
            </div>
            <p>$2.42</p>
            <p>+13.38%</p>
            <p>$399.8M</p>
            <div className="star"><i class="far fa-star"></i></div>
        </div>
    )
}

export {TableItem}