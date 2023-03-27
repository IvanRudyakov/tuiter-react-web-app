import React from "react";
import TuitList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";
import { useSelector } from "react-redux";

const Home = () => {
    return (
        <>
            <h4>Home</h4>
            <WhatsHappening />
            <TuitList />
        </>
    )
}

export default Home;

