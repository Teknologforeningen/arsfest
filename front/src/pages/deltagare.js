import React from "react";
import Nav from "../components/Nav";
import RegList from "../components/RegList";

const Deltagare = () => {
  return (
    <>
    <div className="center-page">
     <Nav activePage='/deltagare'/>
      <div className="page-content">
        <RegList />
      </div>
    </div>
    </>
  )
}

export default Deltagare;