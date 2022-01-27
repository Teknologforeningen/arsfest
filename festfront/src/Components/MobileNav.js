import { useState } from "react";

const MobileNav = () => {
    const [showMobile, setShowMobile] = useState(false);

    return (
        <>
        <div class="mobile-header">
            <img id="navMenuIcon" src="./assets/menu.svg" class="menu" onClick={() => setShowMobile(!showMobile)}></img>
            <a href="./">
                <h1 class="mobile-nav-header">
                TF 150
                </h1>
            </a>
        </div>
        {showMobile &&
        <div id="mobileNav" class="mobile-nav-container">
            <img id="navMenuClose" src="./assets/close.svg" class="menu-close" onClick={() => setShowMobile(!showMobile)}></img>
            <ul class="nav-ul">
                <li class="nav-li">
                <a href="./registration">Deltagaranmälan</a>
                </li>
                <li class="nav-li">
                <a href="./">Basinfo</a>
                </li>
                <li class="nav-li">
                <a href="./fotoinfo">Fotoinfo</a>
                </li>
                <li class="nav-li">
                <a href="./coronainfo">Coronainfo/FAQ</a>
                </li>
                <li class="nav-li">
                <a href="./fundraising">Fundraising</a>
                </li>
                <li class="nav-li">
                <a href="./historik">Historik</a>
                </li>
                <li class="nav-li">
                <a href="./vettoetikett">Vett och Etikett</a>
                </li>
            </ul>
        </div>
        }
        </>
    )
}

export default MobileNav;