import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
    <div className="center-page">
      <div className="grid place-items-center">
        <StaticImage
          src="../images/asset4.png" 
          layout="fixed"
          height={150}
        />
      </div>
      <Nav activePage='/'/>
      <div className="page-content">
        <h2 className="text-3xl mb-4"><b>Välkommen till TFs 151:a årsfest</b></h2>
        <p className="mb-3">
          Teknologföreningen firar sina 151 verksamhetsår med en makalös årsfest lördagen den 18 mars 2022. Vi önskar alla <b>inbjudna gäster, TFare samt avecer</b> hjärtligt välkomna att fira med oss!
        </p>
        <p className="mb-3">
          Festligheterna inleds med solenn akt i Aalto-universitetets Kandidatcenters U-vinge, där det finns möjlighet att framföra hälsningar till jubilaren. Cocktail-tillfället ordnas i samma utrymme. Därefter fortsätter festligheterna med bankett på Urdsgjallar i Otnäs. Efter banketten följer efterfest i nationshuset Urdsgjallar i Otnäs. Sillfrukost ordnas söndagen den 19 mars i Urdsgjallar.
        </p>
        <p className="mb-3">
          Klädsel: Högtidsdräkt med akademiska hederstecken.
        </p>
        <p className="mb-3">
          Anmälan för inbjudna gäster öppnar den 9 februari klockan 12 och stänger 16 februari. Den öppna anmälan för alla TFare samt deras avecer öppnar den 20 februari klockan 12. Vänligen observera att avecer bör fylla i sin egen anmälan.
        </p>
        <p className="mb-3">
          Notera att anmälan går att avboka tills 26.2, varefter den blir bindande. 
        </p>
        <div className="mb-3">
        <h3 className="text-xl">Priser</h3>
          <table>
            <tr>
              <td>Supékort, studerande</td>
              <td>85€</td>
            </tr>
            <tr>
              <td>Supékort, övriga</td>
              <td>95€</td>
            </tr>
            <tr>
              <td>Understödspris</td>
              <td>151€</td>
            </tr>
            <tr>
              <td>Sillfrukost förköp/vid dörren &nbsp;&nbsp;&nbsp;</td>
              <td>16/18€</td>
            </tr>
          </table>
        </div>
        <p className="mb-3">
          Teknologföreningen bjuder på ett supékort ifall det nämns i inbjudan.
        </p>
        <div className="mb-3">
          <h3 className="text-xl">Tidtabell</h3>
          <p>
            <b>18.3.2022</b>
          </p>
          <table>
            <tr>
              <td>16:00 &nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>Solenn akt, Aalto Universitetets Kandidatcenters U-vinge, Otsvängen 1</td>
            </tr>
            <tr>
              <td>17:00 </td>
              <td>Cocktail, Aalto Universitetets Kandidatcenters U-vinge, Otsvängen 1</td>
            </tr>
            <tr>
              <td>18:00 </td>
              <td>Bankett, Urdsgjallar, Otsvängen 22</td>
            </tr>
          </table>
        </div>
        <div className="mb-3">
          <p>
            <b>19.3.2022</b>
          </p>
          <p>
            12:00 &nbsp;&nbsp;&nbsp;&nbsp; Sillfrukost, Urdsgjallar, Otsvängen 22
          </p>
        </div>
        <p className="mb-3">
          <br />Vid frågor, kontakta årsfestmarskalkerna på <a href="mailto: arsfest@tf.fi">arsfest@tf.fi</a>
        </p>
      </div>
    </div>
    </>
  )
}

export default Home;