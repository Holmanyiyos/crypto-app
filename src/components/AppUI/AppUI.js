import React from "react";
import {Portfolio} from "../Portfolio/Portfolio"
import {YourAssets} from "../YourAssets/YourAssets"
import {Header} from "../Header/Header"
import { Table } from "../Table/Table"
import {Navbar} from "../Nav/Navbar"
import { Publicity } from "../Publicity/Publicity";
import "./AppUI.css"

function AppUI(){
    return(
        <div className="appContainer">
            <Navbar/>
            <div className="sectionsContainer">
            <Header/>
            <section className="main">
                <Portfolio/>
                <YourAssets/>
            </section>
            <section className="tablesContainer">
            <Table/>
            <Publicity/>
            </section>
            </div>
        </div>
    )
}

export {AppUI}