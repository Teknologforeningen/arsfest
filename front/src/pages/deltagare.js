import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "../components/Nav";
import RegList from "../components/RegList";

const Deltagare = () => {
  return (
    <>
    <div className="w-[90%] my-2 mx-auto">
      <div className="grid place-items-center overflow-hidden">
        <StaticImage
          src="../images/asset1.png" 
          layout="fixed"
          height={150}
          placeholder="blurred"
          alt="Djur"
        />
      </div>
      <Nav activePage='/deltagare'/>
      <div className="mt-4">
        <RegList />
      </div>
    </div>
    </>
  )
}

export default Deltagare;