import React from "react";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";

const Fundraising = () => {
  return (
  <>
  <div className="center-page">
    <Nav activePage='/fundraising'/>
    <MobileNav />
    <div className="page-content">
      <div className="page-content-container"> 
        <div className="page-content-center">
          <h2 className="page-content-title">Hjälp oss bygga ett nytt hem för TF och hållbart bevara TF-andan också de följande 150 åren - var med och bygga Träffpunkt Aalto!</h2>
          <p className="page-content-text">
            <b>Du kan läsa mera om TF:s nya nationshus och bekanta dig med de som hittills deltagit i insamlingen på <u><a href="https://vision.tf.fi">vision.tf.fi</a></u>. 
              Mera information och svar på frågor ger Fundraisingchefen på TF, Emil Kauppi (+358 45 6444 599, <a href="mailto: emil.kauppi@tf.fi">emil.kauppi@tf.fi)</a>. 
              Ifall du har vidare tankar kring ditt deltagande så var modigt i kontakt.</b>
          </p>
          <p className="content-list">
            <b>Medelinsamlingen har kommit bra igång</b>
          </p>
          <p className="page-content-text">
            TF:s totala investering i flytten till det nya hemmet kommer kosta 6,8 M€, av vilka 4M€ kommer från medelinsamlingen och resten 
            från befintliga medel. Medelinsamlingen har kommit bra igång och <b>vi har redan säkrat 3,0M€ i bidrag!</b> 
          </p>
          <p className="page-content-text">
            Det otroligt fina är att åtta stycken finlandssvenska stiftelser bidragit till Träffpunkt Aalto-projektet med hela 2,6 M€. 
            Vi är otroligt tacksamma för dessa bidrag! Vi är därmed övertygande om att projektet kommer att kunna genomföras med heder 
            och den finlandssvenska kulturen kommer höras och synas vid Aalto-universitetet även i framtiden.
          </p>
          <p className="page-content-text">
            Därtill har vi under höstens lopp fått ta del av kring 60 bidrag från storhjärtade StÄlMar och TF-vänner som vill vara med och se 
            till att nationen kan bibehålla sin livskraft och ge kommande TF-generationer lika goda förutsättningar att förverkliga sig själva 
            och utvecklas, som de själva haft under sin studietid.
          </p>
          <p className="page-content-text">
            <b>Den här gruppen har exemplariskt bidragit med en kraftig grundplåt på ungefär 500 k€. För gruppen har en bruttomånadslön och flera 
            procent av nettoegendomen varit tankegången bakom summorna.</b> Bland dessa exempelvisande individer finns både StÄlMar och icke-StÄlMar, 
            äldre och yngre TF-själar. Nu är det din tur att hänga med! 
          </p>
          <p className="content-list">
            <b>Ditt bidrag är viktigt</b>
          </p>
          <p className="page-content-text">
            Nu har du ditt livs bästa chans att ge tillbaka för de upplevelser, de kontakter och det personliga inflytande som kamratskapen under 
            studietiden har bjudit dig på. Samtidigt försäkrar du att kommande generationer har möjligheten att få lika mycket av sin studietid som 
            du fått. Vi välkomnar dig att bidra till den återstående miljonen så att TF kan förverkliga de attraktiva och ändamålsenliga medlemsutrymmen 
            som krävs för att nationen ska vara livskraftig även i framtiden. Allas bidrag behövs!
          </p>
          <p className="page-content-text">
            <b>TF ämnar säkra den återstående miljonen under första halvan av detta år, för att försäkra att flytten 2024 blir smidig!</b>
          </p>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Fundraising;