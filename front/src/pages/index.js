import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "../components/Nav";

export const Head = () => <title>TF 152</title>

const Home = () => {
  return (
    <>
      <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] my-2 mx-auto">
        <div className="grid place-items-center overflow-hidden" >
          <StaticImage
            src="../images/asset4.png"
            layout="fixed"
            height={150}
            placeholder="blurred"
            alt="Djur"
          />
        </div>
        <Nav activePage='/' />
        <div className="mt-4">
          <h2 className="text-3xl mb-7 mt-7 text-center"><b>Välkommen till Teknologföreningens 152 årsfest</b></h2>
          <p className="mb-3">
            Teknologföreningen firar sina 152 verksamhetsår med en hejdundrande årsfest lördagen den 16 mars 2024. Vi önskar alla <b>inbjudna gäster, nationsmedlemmar, alumner och avecer</b> hjärtligt välkomna att fira med oss!
          </p>
          <p className="mb-6">
            Festiviteterna inleds med solenn akt på Urdsgjallar i Otnäs, där det finns möjlighet att framföra hälsningar till jubilaren. Även cocktailtillfället äger rum på Urdsgjallar. Festiviteterna fortsätter sedermera med bankett på evenemangscentret Koskenranta. Busstransport ordnas från Urdsgjallar till banketten. Vänligen ange i anmälan ifall Ni närvarar vid cocktailtillfället och/eller den solenna akten samt är i behov av busstransport till banketten.
          </p>
          <p className="mb-6">
            Klädsel: Högtidsdräkt med akademiska hederstecken.
          </p>
          <p className="mb-3">
            Anmälan för inbjudna gäster öppnar den 24 januari klockan 12 och stänger 9 februari klockan 18. Den öppna anmälan för alla nationsmedlemmar, alumner samt övriga gäster och avecer öppnar den 12 februari klockan 12 och stänger senast 16 februari klockan 18. Vänligen observera att avecer bör fylla i sin egen anmälan.
          </p>
          <p className="mb-6">
            Notera att anmälan går att avboka tills 16.2, därefter blir anmälan bindande.
          </p>
          <div className="mb-3">
            <h3 className="text-xl">Priser</h3>
            <table>
              <tbody>
                <tr>
                  <td>Supékort, studerande</td>
                  <td>120 €</td>
                </tr>
                <tr>
                  <td>Supékort, övriga</td>
                  <td>135 €</td>
                </tr>
                <tr>
                  <td>Understödspris</td>
                  <td>170 €</td>
                </tr>
                <tr>
                  <td>Sillfrukost förköp/vid dörren &nbsp;&nbsp;&nbsp;</td>
                  <td>18/20 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-6">
            Teknologföreningen bjuder på ett supékort ifall det nämns i inbjudan.
          </p>
          <div className="mb-3">
            <h3 className="text-xl">Tidtabell</h3>
            <table>
              <thead><tr><td><b>16.3.2024</b></td></tr></thead>
              <tbody className="align-top">
                <tr>
                  <td>14:00</td>
                  <td>Solenn akt, Urdsgjallar, Otsvängen 22, Esbo</td>
                </tr>
                <tr>
                  <td>15:30 </td>
                  <td>Cocktail, Urdsgjallar, Otsvängen 22, Esbo</td>
                </tr>
                <tr>
                  <td>16:30 </td>
                  <td>Bussarna börjar stegvis åka mot Koskenranta</td>
                </tr>
                <tr>
                  <td>17:00 </td>
                  <td>Dörrarna öppnar, Koskenranta, Katarina av Sachsens gata 9, Helsingfors </td>
                </tr>
                <tr>
                  <td>18:00 </td>
                  <td>Bankett, Koskenranta, Katarina av Sachsens gata 9, Helsingfors </td>
                </tr>

              </tbody>
            </table>
            <p className="mt-3">       Efter banketten erbjuds busstransport tillbaka till Urdsgjallar där efterfesten äger rum.</p>
          </div>
          <div className="mb-3">
            <table>
              <thead><tr><td><b>17.3.2024</b></td></tr></thead>
              <tbody>
                <tr>
                  <td>12:00</td>
                  <td>Sillfrukost, Urdsgjallar, Otsvängen 22, Esbo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-10">
            <br />Vid frågor, kontakta årsfestmarskalkerna Matilda Hätinen och Rasmus Buchert via email: <a href="mailto: arsfest@tf.fi">arsfest@tf.fi</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Home;