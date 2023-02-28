import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "../components/Nav";
import SillisForm from "../components/SillisForm";

export const Head = () => <title>TF 151</title>

const Sillis = () => {
  return (
    <>
    <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] my-2 mx-auto">
      <div className="grid place-items-center overflow-hidden">
        <StaticImage
          src="../images/asset3.png" 
          layout="fixed"
          height={150}
          placeholder="blurred"
          alt="Djur"
        />
      </div>
      <Nav activePage='/sillis'/>
      <div className="mt-4">
        <SillisForm />
      </div>
    </div>
    </>
  )
}

export default Sillis;