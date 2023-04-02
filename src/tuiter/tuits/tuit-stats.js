import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunk";


const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    return (
        <div className="row medium-font stats-font-size">
            <div className="col-2">
                <i className="fa fa-comment me-1"></i> {tuit.replies}
            </div>
            <div className="col-2">
                <i className="fa fa-retweet me-1"></i> {tuit.retuits}
            </div>
            <div className="col-3" onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                liked: !tuit.liked,
                likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
                disliked: tuit.disliked && !tuit.liked ? false : tuit.disliked,
                dislikes: tuit.disliked && !tuit.liked ? tuit.dislikes - 1 : tuit.dislikes
            }))}>
                <i className={`fa fa-heart me-1 ${tuit.liked ? 'red-heart' : 'normal-heart'}`}></i> {tuit.likes}
            </div>
            <div className="col-3" onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                disliked: !tuit.disliked,
                dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
                liked: tuit.liked && !tuit.disliked ? false : tuit.liked,
                likes: tuit.liked && !tuit.disliked ? tuit.likes - 1 : tuit.likes
            }))}>
                <i className={`fa fa-thumbs-down me-1 ${tuit.disliked ? 'red-heart' : 'normal-heart'}`}></i> {tuit.dislikes}
            </div>
            <div className="col-2">
                <i className="fa fa-share-alt-square me-1"></i>
            </div>
        </div>
    )
}

export default TuitStats;

