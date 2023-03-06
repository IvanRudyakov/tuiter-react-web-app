
import React from "react";

const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
 return (
    <>
        <div className="list-group">
        <div className="list-group-item gray-border">
            <i className="fab fa-twitter"></i> <span className="d-none d-xl-inline">Tuiter</span></div>
        <a className={`list-group-item list-group-item-action gray-border ${active === 'home'?'active':''}`}>
            <i className="fa fa-home me-1"></i><span className="d-none d-xl-inline">Home</span></a>
        <a className={`list-group-item list-group-item-action gray-border ${active === 'explore'?'active':''}`}>
            <i className="fa fa-hashtag me-1"></i><span className="d-none d-xl-inline">Explore</span></a>
        <a className={`list-group-item list-group-item-action gray-border ${active === 'notifications'?'active':''}`}>
            <i className="fa fa-bell me-1"></i><span className="d-none d-xl-inline">Notifications</span></a>
        <a className={`list-group-item list-group-item-action gray-border ${active === 'messages'?'active':''}`}>
            <i className="fa fa-envelope me-1"></i><span className="d-none d-xl-inline">Messages</span></a>
        <a className={`list-group-item list-group-item-action gray-border ${active === 'bookmarks'?'active':''}`}>
            <i className="fa fa-bookmark me-1"></i><span className="d-none d-xl-inline">Bookmarks</span></a>
        <a className={`list-group-item list-group-item-action gray-border ${active === 'lists'?'active':''}`}>
            <i className="fa fa-list me-1"></i><span className="d-none d-xl-inline">Lists</span></a>
        <a className={`list-group-item list-group-item-action gray-border ${active === 'profile'?'active':''}`}>
            <i className="fa fa-user me-1"></i><span className="d-none d-xl-inline">Profile</span></a>
        <a className={`list-group-item list-group-item-action gray-border ${active === 'more'?'active':''}`}>
            <i className="fa fa-minus-circle me-1"></i><span className="d-none d-xl-inline">More</span></a>
        </div>
        <div className="d-grid mt-2">
            <a className="btn btn-primary btn-block rounded-pill">
                Tweet
            </a>
        </div>
    </>
 );
};
export default NavigationSidebar;