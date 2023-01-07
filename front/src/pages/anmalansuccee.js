import React from "react";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";

const AnmalanSuccee = () => {
  return (
    <div className="center-page">
      <Nav />
      <MobileNav />
  
      <div className="page-content">
        <div className="page-content-container"> 
          <div className="page-content-center">
            <div className="center-container">
              <div>
                <h2 className="page-content-title">Välkommen på TFs 150:nde årsfest!</h2>
                <br />
                <h2 className="page-content-title">Din anmälan har tagits emot.</h2>
                <br />
                <p className="page-content-text">Observera att anmälan går att avboka tills 14.2, varefter den blir bindande.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnmalanSuccee;