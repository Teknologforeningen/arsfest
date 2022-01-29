import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";

const AnmalanSuccee = () => {
    return (
        <div className="center-page">
            <Nav />
            <MobileNav />
        
            <div className="page-content">
                <div className="page-content-container"> 
                    <div className="page-content-center">
                        <div className="center-container">
                            <div>
                            <h2>Välkommen på TFs 150:nde årsfest!</h2>
                            <br></br>
                            <h2>Din anmälan har tagits emot.</h2>
                            <br></br>
                            <h2>Observera att anmälan går att avboka tills 14.2, varefter den blir bindande.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnmalanSuccee;