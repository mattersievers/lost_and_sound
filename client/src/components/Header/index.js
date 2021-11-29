import React from "react";
import Navigation from '../Navigation';

const Header = (props) => {
    return (
        <section className="flex-row justify-content-between header">
            <h1 className="navbar-header name">Lost and Sound</h1>
            <div className="flex-row">
            <Navigation
            pages={props.pages}
            currentPageSelection={props.currentPageSelection}
            setCurrentPageSelection = {props.setCurrentPageSelection}
            />
            </div>
        </section>
    )
}

export default Header; 