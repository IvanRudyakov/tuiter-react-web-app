import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
    const whoArray = useSelector((state) => state.who);
    return (
        <div className="list-group ps-4">
            <div className="list-group-item strong-font gray-border">
                Who to Follow
            </div>
            {whoArray.map(whoToFollow => <WhoToFollowListItem key={whoToFollow._id} who={whoToFollow} />)}
        </div>
    );
}


export default WhoToFollowList;

