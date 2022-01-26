import React from "react";
import "./Portfolio.css"

function Portfolio(){
    return(
        <React.Fragment>
        <div className="portfolio__graphic">
        <h2 className="section__title">Portfolio</h2>
            <p>$ 17 643.41</p>
            <span>Portfolio balance</span>
            <div className="portfolio__time">
                <span>1H</span>
                <span>24H</span>
                <span>1W</span>
                <span>1M</span>
                <span>1Y</span>
                <span>ALL</span>
            </div>
        </div>
        </React.Fragment>
    )
}

export {Portfolio}