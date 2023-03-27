import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuitsHome = useSelector(state => state.tuits)
    return (
        <div className="list-group strong-font mt-2">
            {tuitsHome.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)}
        </div>
    )
}

export default TuitList;

