import React from "react";
import who from "./who.json";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return (
        <div className="list-group ps-4">
            <div className="list-group-item strong-font gray-border">
                Who to Follow
            </div>
            {who.map(whoToFollow => <WhoToFollowListItem key={whoToFollow._id} who={whoToFollow} />)}
        </div>
    );
}


export default WhoToFollowList;

