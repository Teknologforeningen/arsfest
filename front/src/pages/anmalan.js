import React from "react";
import Nav from "../components/Nav";
import RegForm from "../components/RegForm";

const Anmalan = () => {
  return (
    <>
    <div className="center-page">
      <Nav activePage='/anmalan'/>
      <div className="page-content">
        <RegForm />
      </div>
    </div>
    </>
  )
}

export default Anmalan;