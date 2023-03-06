import React from "react";

const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return (
        <a href="http://www.example.com" className="list-group-item list-group-item-action gray-border">
            <div className="row g-0 g-xl-2">
                <div className="col-2">
                    <img src={`../images/${who.avatarIcon}`} alt={who.avatarIcon} className="w-100 h-50px rounded-corners-50" />
                </div>
                <div className="col-7">
                    <div className="strong-font">
                        {who.userName} <i className="fa fa-check-circle"></i>
                    </div>
                    <div>
                        @{who.handle}
                    </div>
                </div>
                <div className="col-3">
                    <div className="d-flex h-100 flex-row justify-content-center align-items-center">
                        <button className="btn btn-primary rounded-corners-30">
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default WhoToFollowListItem;



