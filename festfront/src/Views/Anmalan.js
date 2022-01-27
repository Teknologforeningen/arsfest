import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import RegForm from "../Components/RegForm";

const Anmalan = () => {
    return (
    <>
    <div className="center-page">
        <Nav />
        <MobileNav />
        {/* <div className="page-content">
        <div className="page-content-container"> 
            <div className="page-content-center">
            <h2 className="page-content-title">Deltagaranmälan</h2>
            <p className="page-content-text">
                Anmälan uppdateras för tillfället. Anmälan öppnar 31.1 för inbjudna gäster och den öppna anmälan öppnar 7.2.
            </p>   
            </div>
        </div>
        </div> */}
        <RegForm />
    </div>
    </>
    )
}

export default Anmalan;