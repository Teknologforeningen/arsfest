import React from "react";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import RegList from "../components/RegList";

const Deltagare = () => {
    return (
    <>
    <div className="center-page">
        <Nav />
        <MobileNav />
        <div className="page-content">
            <div className="page-content-container"> 
                <div className="page-content-center">
                    <RegList />
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Deltagare;