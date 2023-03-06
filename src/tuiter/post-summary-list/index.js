import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return (
        <div className="list-group strong-font mt-2">
            {posts.map(post => <PostSummaryItem key={post._id} post={post}/>)}
        </div>
    )
}

export default PostSummaryList;

