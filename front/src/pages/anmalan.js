import React from "react";
import Nav from "../components/Nav";
import RegForm from "../components/RegForm";

const Anmalan = () => {
  return (
    <>
    <Nav activePage='/anmalan'/>
    <div className="center-page">
      <div className="page-content">
        <div className="page-content-container"> 
          <div className="page-content-center">
            <RegForm />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Anmalan;