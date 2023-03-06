import React from "react";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return (
        <>
            <div className="row mb-2">
                <div className="col-11">
                    <div className="row g-0">
                        <div className="col-1 pt-1 ps-2 white-background rounded-corners-l-30"><i className="fa fa-search"></i></div>
                        <div className="col-11">
                            <input type="text" id="search-twitter-input" className="form-control" placeholder="Search Twitter" />
                        </div>
                    </div>
                </div>
                <div className="col-1">
                    <a href="http://www.example.com" className="d-flex h-100 flex-row justify-content-center align-items-center">
                        <i className="fa fa-cog fa-2x blue"></i>
                    </a>
                </div>
            </div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a href="http://www.example.com" className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a href="http://www.example.com" className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a href="http://www.example.com" className="nav-link">News</a>
                </li>
            </ul>
            <div className="spaceship-div">
                <img src="../images/spacex-starship.png" alt="spacex starship" className="mt-2 w-100 h-auto" />
                <div className="spaceship-text">SpaceX Starship</div>
            </div>
            {PostSummaryList()}
        </>
    )
}


export default ExploreComponent;





