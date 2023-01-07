import React from "react";
import { useState } from "react";

const MobileNav = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <>
    <div className="mobile-header">
      <img id="navMenuIcon" src="/assets/menu.svg" className="menu" onClick={() => setShowMobile(!showMobile)}></img>
      <a href="/">
        <h1 className="mobile-nav-header">
          TF 150
        </h1>
      </a>
    </div>
    {showMobile &&
    <div id="mobileNav" className="mobile-nav-container">
      <img id="navMenuClose" src="/assets/close.svg" className="menu-close" onClick={() => setShowMobile(!showMobile)}></img>
      <ul className="nav-ul">
        <li className="nav-li">
          <a href="/">Framsida</a>
        </li>
        <li className="nav-li">
          <a href="/anmalan">Deltagaranmälan</a>
        </li>
        <li className="nav-li">
          <a href="/deltagare">Deltagarlista</a>
        </li>
        <li className="nav-li">
          <a href="/fotoinfo">Fotoinfo</a>
        </li>
        <li className="nav-li">
          <a href="/fundraising">Fundraising</a>
        </li>
        <li className="nav-li">
          <a href="/historik">Historik</a>
        </li>
        <li className="nav-li">
          <a href="/vettoetikett">Vett och Etikett</a>
        </li>
      </ul>
    </div>
    }
    </>
  )
}

export default MobileNav;