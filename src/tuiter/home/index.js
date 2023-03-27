import React from "react";
import TuitList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";
import { useSelector } from "react-redux";

const Home = () => {
    const tuitsHome = useSelector(state => state.tuits)
    return (
        <>
            <h4>Home</h4>
            <WhatsHappening />
            <TuitList />
        </>
    )
}

export default Home;

