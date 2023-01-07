import React from "react";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";

const Coronainfo = () => {
    return (
    <>
    <div className="center-page">
        <Nav />
        <MobileNav />
        <div className="page-content">
        <div className="page-content-container"> 
            <div className="page-content-center">
            <h2 className="page-content-title">Coronainfo</h2>
            <p className="page-content-text">
                För att kunna njuta av en så säker fest som möjligt kommer rådande restriktioner beaktas. Möjliga ändringar informeras på denna hemsida samt per e-post åt anmälda deltagare.  
            </p>
            <p className="page-content-text">Observera att det är förbjudet att delta på jubileumsårsfesten ifall man är sjuk eller lider av  coronasymptom! </p>
    
            <h3><b>FAQ: <br/><br/></b></h3>
    
            <p className="content-list"><b>Kommer jubileumsårsfesten att ordnas?</b></p>
            <p className="content-list">Vi följer aktivt med de rådande restriktionerna och ordnar jubileumsårsfesten ifall situationen så tillåter. Ifall situationen så kräver, kommer festen att inhiberas eller flyttas till en annan tidpunkt. <br/><br/></p>
    
            <p className="content-list"><b>Har jag möjlighet att avboka mitt deltagande?</b></p>
            <p className="content-list">Anmälan går att avboka tills 14.2, varefter den blir bindande. Du kan avboka ditt deltagande genom att skicka mail till <a href = "mailto: arsfest@tf.fi">arsfest@tf.fi</a>.<br/><br/> </p>
            
            <p className="content-list"><b>Kommer pengarna att återbetalas ifall jubileumsårsfesten inhiberas?</b></p>
            <p className="content-list">Ja. <br/><br/></p>
    
            <p className="content-list"><b>Ifall jubileumsårsfestens tidpunkt ändrar, kommer man att behöva anmäla sig pånytt?</b></p>
            <p className="content-list">Ifall du redan anmält dig till festen och tidpunkten ändras, kommer din anmälan att vara i kraft och du behöver således inte anmäla dig pånytt.<br/><br/></p>
    
            <p className="content-list"><b>Vad om den möjliga nya tidpunkten inte passar mig?</b></p>
            <p className="content-list">Ifall den nya tidpunkten inte passar dig och du redan har anmält dig, kan du avboka ditt deltagande och få pengarna tillbaka. <br/><br/></p>
    
            <p className="content-list"><b>Kommer coronapass att granskas under tillställningen?</b></p>
            <p className="content-list">Ifall situationen så kräver, kommer coronapass att tas i bruk. <br/><br/></p>
            </div>
        </div>
        </div>
    </div>
    </>
    )
}

export default Coronainfo;