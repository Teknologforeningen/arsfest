import React from "react";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";

const Historik = () => {
  return (
    <>
    <div className="center-page">
      <Nav activePage='/historik'/>
      <MobileNav />
      <div className="page-content">
        <div className="page-content-container">
          <div className="page-content-center">
            <h2 className="page-content-title">TF:s historik</h2>
            <p className="page-content-text">
              Jubileumsåret till ära har nationen producerat en 150-årshistorik — en högkvalitativ och verklighetsförankrad dokumentation av TF genom tiderna.
            </p>
            <p className="page-content-text">
              Teknologföreningen är grundad i Helsingfors år 1872. TF har sedan dess danat svenskspråkiga samt personer med intresse för svenskan 
              från hela Finland. Alla, från Pargas övärld till Österbottens slätter och Helsingfors betonggårdar, har tagits emot med öppna armar. 
              Både TF och läroverket som kom att bli Tekniska Högskolan (och senare Aalto-universitetet) växte fram och utvecklades tillsammans med 
              Finland. Nationen var hemmastadd i Helsingfors från grundandet fram till 1966, då Tekniska Högskolans kampus flyttade till Otnäs i Esbo. 
            </p>
            <p className="page-content-text">
              Det är inte heller enbart i den akademiska världen som TF satt sitt spår. På 1960-talet bifogades Paavo Nurmi-statyn till Vasa-skeppets 
              historia (däribland en TF:are, så klart) och på 1980-talet blev TF Disco känt i hela Finland. År 2005 stod TF värd för efterfesterna under 
              VM i friidrott och nationen har under den senaste tiden aktivt varit med i utvecklingen av Victoria-kvarteret på Busholmen, där TF idag 
              handhar studiebostäder.
            </p>
            <p className="page-content-text">
              Historiken bygger förståelse för TF:s och hela teknologsamfundets utveckling från 1870-talet till dagens värld. Historiken publiceras i samband med Teknologföreningens 150-års jubileumsårsfest i mars 2022.
            </p>
            <p className="content-list">
              <b>Priser</b>
            </p>
            <p className="content-list">
              Normalpris: 35 €
            </p>
            <p className="content-list">
              Studerandepris: 20 €
            </p>
            <p className="content-list">
              TF Stälm / TFiF-medlem: 28 €
            </p>
            <p className="content-list">
              Understödspris: 150 €
            </p>
            <p className="page-content-text">
              Beställ din historik via <a href="https://shop.tf.fi">shop.tf.fi</a> 
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Historik;