import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import RegForm from "../Components/RegForm";

const Anmalan = () => {
    return (
    <>
    <div className="center-page">
        <Nav />
        <MobileNav />
        <div className="page-content">
            <div className="page-content-container"> 
                <div className="page-content-center">
                    <RegForm />
                </div>
            </div>
        </div>
        
    </div>
    </>
    )
}

export default Anmalan;