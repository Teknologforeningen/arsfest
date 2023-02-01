import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "../components/Nav";
import RegForm from "../components/RegForm";

export const Head = () => <title>TF151</title>

const Anmalan = () => {
  return (
    <>
    <div className="w-[90%] my-2 mx-auto">
      <div className="grid place-items-center overflow-hidden">
        <StaticImage
          src="../images/asset3.png" 
          layout="fixed"
          height={150}
          placeholder="blurred"
          alt="Djur"
        />
      </div>
      <Nav activePage='/anmalan'/>
      <div className="mt-4">
        <RegForm />
      </div>
    </div>
    </>
  )
}

export default Anmalan;