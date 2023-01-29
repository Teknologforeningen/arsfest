import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "../components/Nav";
import RegForm from "../components/RegForm";

const Anmalan = () => {
  return (
    <>
    <div className="center-page">
      <div className="grid place-items-center">
        <StaticImage
          src="../images/asset3.png" 
          layout="fixed"
          height={150}
        />
      </div>
      <Nav activePage='/anmalan'/>
      <div className="page-content">
        <RegForm />
      </div>
    </div>
    </>
  )
}

export default Anmalan;