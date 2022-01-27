import React from "react";
import {SearchTable} from "../SearchTable/SearchTable"
import {TableItem} from "../TableItem/TableItem"
import "./Table.css"

function Table(){
    return(
        <React.Fragment>
            <SearchTable/>
            <div className="titlesTable">
            <p>Name</p>
            <p>Price</p>
            <p>Chanee</p>
            <p>Market Cap</p>
            <p>Watch</p>
            </div>
            <TableItem/>
            <TableItem/>
            <TableItem/>

        </React.Fragment>
    )
}

export {Table}