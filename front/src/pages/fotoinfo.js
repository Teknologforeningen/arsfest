import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "../components/Nav";

export const Head = () => <title>TF 151</title>

const Fotoinfo = () => {
  return (
    <>
    <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] my-2 mx-auto">
      <div className="grid place-items-center overflow-hidden py-[30px]">
        <StaticImage
          src="../images/asset2.png" 
          layout="fixed"
          height={90}
          placeholder="blurred"
          alt="Djur"
        />
      </div>
      <Nav activePage='/fotoinfo'/>
      <div className="mt-4">
        <h2 className="text-3xl mb-4">Fotoinfo</h2>
        <p className="mb-3">
          Fotografer kommer att befinna sig på årsfesten
        </p>
        <div className="mb-3">
          <p>Bilder som tas under årsfesten kan publiceras i Teknologföreningens fotogalleri, möjligen också på insidan av nationstidningen Modulens pärm som “Mingelvingel”.</p>
          <p>Bilder där evenemangdeltagare inte syns tydligt kan därmed även publiceras på Teknologföreningens sociala medier.</p>
        </div>
        <p>
          Fotografen presenteras på plats för årsfestdeltagarna. Deltagarna kan meddela fotografen under hela årsfesten att de inte vill bli fotograferade eller att bilderna inte får publiceras.
          Det är även möjligt att be fotografen att radera bilder från fotogalleriet i efterhand.
        </p>
      </div>
    </div>
    </>
  )
}

export default Fotoinfo;