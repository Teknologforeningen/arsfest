import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import RegList from "../Components/RegList";

const Deltagare = () => {
    return (
    <>
    <div className="center-page">
        <Nav />
        <MobileNav />
        <div className="page-content">
            <div className="page-content-container"> 
                <div className="page-content-center">
                    <RegList />
                </div>
            </div>
        </div>
        
    </div>
    </>
    )
}

export default Deltagare;