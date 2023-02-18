import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "../components/Nav";
import AfterpartyForm from "../components/AfterpartyForm";

export const Head = () => <title>TF151</title>

const Efterfest = () => {
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
      <Nav activePage='/efterfest'/>
      <div className="mt-4">
        <AfterpartyForm />
      </div>
    </div>
    </>
  )
}

export default Efterfest;