import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";

const Anmalan = () => {
    return (
    <>
    <div class="center-page">
        <Nav />
        <MobileNav />
        <div class="page-content">
        <div class="page-content-container"> 
            <div class="page-content-center">
            <h2 class="page-content-title">Deltagaranmälan</h2>
            <p class="page-content-text">
                Anmälan uppdateras för tillfället. Anmälan öppnar 31.1 för inbjudna gäster och den öppna anmälan öppnar 7.2.
            </p>   
            </div>
        </div>
        </div>
    </div>
    </>
    )
}

export default Anmalan;