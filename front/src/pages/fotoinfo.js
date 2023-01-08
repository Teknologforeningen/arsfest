import React from "react";
import Nav from "../components/Nav";

const Fotoinfo = () => {
  return (
  <>
  <Nav activePage='/fotoinfo'/>
  <div className="center-page">
    <div className="page-content">
      <div className="page-content-container">
        <div className="page-content-center">
          <h2 className="page-content-title">Fotoinfo</h2>
          <p className="content-list">
            Fotografer kommer att befinna sig på årsfesten
          </p>   
          <ul>
            <li>
              Bilder som tas under årsfesten kan publiceras i Teknologföreningens fotogalleri, möjligen också på insidan av nationstidningen Modulens pärm som “Mingelvingel”.
            </li>
            <li>
              Bilder där evenemangdeltagare inte syns tydligt kan därmed även publiceras på Teknologföreningens sociala medier.
            </li>
          </ul>
          <p className="page-content-text">
            Fotografen presenteras på plats för årsfestdeltagarna. Deltagarna kan meddela fotografen under hela årsfesten att de inte vill bli fotograferade eller att bilderna inte får publiceras.
            Det är även möjligt att be fotografen att radera bilder från fotogalleriet i efterhand.
          </p>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Fotoinfo;