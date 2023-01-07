import React from "react";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";

const Home = () => {
  return (
  <>
  <div className="center-page">
    <Nav />
    <MobileNav />
    <div className="page-content">
      <div className="page-content-container"> 
        <div className="page-content-center">
          <h2 className="page-content-title"><b>Välkommen till TFs 150:nde årsfest</b></h2>
          <p className="page-content-text">
            Teknologföreningen firar sina 150 verksamhetsår med en makalös jubileumsårsfest lördagen den 19 mars 2022. Vi önskar alla inbjudna gäster, TFare samt avecer hjärtligt välkomna och fira med oss!
          </p>
          <p className="page-content-text">
            Festligheterna inleds med solenn akt på Tekniska Muséet i Gammelstaden, där man har möjlighet att framföra hälsningar till jubilaren. Därefter fortsätter festligheterna med cocktail och bankett i festutrymmet Wirtaamo. Efter banketten följer efterfest i nationshuset Urdsgjallar i Otnäs, dit det ordnas busstransport. Sillfrukost ordnas på söndagen den 20 mars i Urdsgjallar.
          </p>
          <p className="page-content-text">
            Klädsel: Högtidsdräkt med akademiska hederstecken.
          </p>
          <p className="page-content-text">
            Anmälan för inbjudna gäster samt deras avecer öppnar den 31 januari klockan 12. Den öppna anmälan för alla TFare samt deras avecer öppnar den 7 februari klockan 12. Vänligen observera att avecer bör fylla i sin egen anmälan.
          </p>
          <p className="page-content-text">
            Notera att anmälan går att avboka tills 14.2, varefter den blir bindande. För att kunna njuta av en så säker fest som möjligt kommer rådande restriktioner beaktas. Vänligen läs igenom <a href="./coronainfo">Coronainfon</a> för mer information.
          </p>
          <p className="content-list">
            <b>Priser</b><br/><br/>
          </p>
          <p className="content-list">
            Supékort, studerande            100 €
          </p>
          <p className="content-list">
            Supékort, övriga            120 €
          </p>
          <p className="content-list">
            Understödspris            300 €
          </p>
          <p className="content-list">
            Sillfrukost förköp/vid dörren         12 € / 14 € <br/><br/>
          </p>
          <p className="page-content-text">
            Teknologföreningen bjuder på ett supékort ifall det nämns i inbjudan.
          </p>
          <p className="content-list">
            <b>Tidtabell</b><br/><br/>
          </p>
          <p className="content-list">
            <b>19.3.2022</b>
          </p>
          <p className="content-list">
            15:00 &nbsp;&nbsp;&nbsp;&nbsp; Solenn akt, Tekniska Muséet, Viksvägen 1
          </p>
          <p className="content-list">
            17:00 &nbsp;&nbsp;&nbsp;&nbsp; Cocktail, Wirtaamo, Katarina av Sachsens gata 9
          </p>
          <p className="content-list">
            18:00 &nbsp;&nbsp;&nbsp;&nbsp; Bankett, Wirtaamo, Katarina av Sachsens gata 9<br/><br/>
          </p>
          <p className="content-list">
            <b>20.3.2022</b>
          </p>
          <p className="content-list">
            12:00 &nbsp;&nbsp;&nbsp;&nbsp; Sillfrukost, Urdsgjallar, Otsvängen 22<br/><br/>
          </p>
          <p className="page-content-text">
            Vid frågor, kontakta årsfestmarskalkerna på <a href="mailto: arsfest@tf.fi">arsfest@tf.fi</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Home;