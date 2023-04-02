import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunk";

const TuitItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <div className="list-group-item list-group-item-action gray-border">
            <div className="row">
                <div className="col-2 col-md-2 col-lg-2 col-xxl-2">
                    <img src={`../images/${tuit.image}`} alt={tuit.image} className="w-100 rounded-corners-50" />
                </div>
                <div className="col-10 col-md-10 col-lg-10 col-xxl-10">
                    <div className="row">
                        <div className="col-11">
                            {tuit.userName} <i className="fa fa-check-circle"></i> <span className="light-font"> {tuit.handle} - {tuit.time}</span>
                        </div>
                        <div className="col-1">
                            <i className="bi bi-x-lg" onClick={() => deleteTuitHandler(tuit._id)}></i>
                        </div>
                    </div>
                    <div className="medium-font">
                        {tuit.tuit}
                    </div>
                    <TuitStats tuit={tuit} />
                </div>
            </div>
        </div>
    );

}

export default TuitItem;





