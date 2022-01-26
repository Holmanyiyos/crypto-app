import React from "react";
import {Portfolio} from "../Portfolio/Portfolio"
import {YourAssets} from "../YourAssets/YourAssets"
import {Header} from "../Header/Header"
import { Table } from "../Table/Table";
import "./AppUI.css"

function AppUI(){
    return(
        <React.Fragment>
            <Header/>
            <section className="main">
                <Portfolio/>
                <YourAssets/>
            </section>
            <section className="tables">
            <Table/>
            </section>
        </React.Fragment>
    )
}

export {AppUI}