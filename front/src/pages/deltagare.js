import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "../components/Nav";
import RegList from "../components/RegList";

const Deltagare = () => {
  return (
    <>
    <div className="center-page">
      <div className="grid place-items-center">
        <StaticImage
          src="../images/asset1.png" 
          layout="fixed"
          height={150}
          placeholder="blurred"
        />
      </div>
      <Nav activePage='/deltagare'/>
      <div className="page-content">
        <RegList />
      </div>
    </div>
    </>
  )
}

export default Deltagare;