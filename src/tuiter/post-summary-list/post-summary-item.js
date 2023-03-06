import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return (
        <a href="#" className="list-group-item list-group-item-action gray-border">
            <div className="row">
                <div className="col-9 col-md-10 col-lg-9 col-xxl-10">
                    <div className="light-font">
                        {post.topic}
                    </div>
                    <div>
                        {post.userName} <i className="fa fa-check-circle"></i> <span className="light-font"> - {post.time}</span>
                    </div>
                    <div className="light-font">
                        {post.title}
                    </div>
                </div>
                <div className="col-3 col-md-2 col-lg-3 col-xxl-2">
                    <img src={`../images/${post.image}`} className="w-100 h-100 rounded-corners-15" />
                </div>
            </div>
        </a>
    );

}

export default PostSummaryItem;





