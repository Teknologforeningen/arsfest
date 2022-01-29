import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";

const AnmalanMisslyckad = () => {
    return (
        <div className="center-page">
            <Nav />
            <MobileNav />
        
            <div className="page-content">
                <div className="page-content-container"> 
                    <div className="page-content-center">
                        <div className="center-container">
                            <div>
                                <h2 className="page-content-title">Anmälan misslyckades</h2>
                                <p className="page-content-text">Något gick fel när din anmälan hanterades, vänligen skicka in en ny anmälan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnmalanMisslyckad;