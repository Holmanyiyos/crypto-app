import React from "react";
import {YourAssetsItem} from "../YourAssetsItem/YourAssetsItem";
import "./YourAssets.css"

function YourAssets(){
    return(
        <React.Fragment>
        <section className="assetsList">
            <h2 className="section__title">Your Assets</h2>
            <YourAssetsItem/>
            <YourAssetsItem/>
            <YourAssetsItem/>
        </section>
        </React.Fragment>
    )
}

export {YourAssets}