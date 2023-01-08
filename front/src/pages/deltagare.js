import React from "react";
import Nav from "../components/Nav";
import RegList from "../components/RegList";

const Deltagare = () => {
  return (
    <>
    <Nav activePage='/deltagare'/>
    <div className="center-page">
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