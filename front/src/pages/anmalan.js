import React from "react";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import RegForm from "../components/RegForm";

const Anmalan = () => {
  return (
    <>
    <div className="center-page">
      <Nav />
      <MobileNav />
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