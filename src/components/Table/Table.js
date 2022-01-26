import React from "react";
import {SearchTable} from "../SearchTable/SearchTable"
import {TableItem} from "../TableItem/TableItem"

function Table(){
    return(
        <React.Fragment>
            <SearchTable/>
            <TableItem/>
        </React.Fragment>
    )
}

export {Table}