import React from "react";
import { useDispatch } from "react-redux";
import { toggleLike } from "./tuits-reducer";


const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const tuitLikeHandler = () => {
        dispatch(toggleLike(tuit._id));
    }
    return (
        <div className="row medium-font">
            <div className="col-3">
                <i className="fa fa-comment me-1"></i> {tuit.replies}
            </div>
            <div className="col-3">
                <i className="fa fa-retweet me-1"></i> {tuit.retuits}
            </div>
            <div className="col-3" onClick={tuitLikeHandler}>
                <i className={`fa fa-heart me-1 ${tuit.liked ? 'red-heart' : 'normal-heart'}`}></i> {tuit.likes}
            </div>
            <div className="col-3">
                <i className="fa fa-share-alt-square me-1"></i>
            </div>
        </div>
    )
}

export default TuitStats;

