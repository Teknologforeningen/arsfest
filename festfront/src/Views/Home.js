import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";

const Home = () => {
    return (
    <>
    <div class="center-page">
        <Nav />
        <MobileNav />
    
        <div class="page-content">
            <div class="page-content-container"> 
                <div class="page-content-center">
                    <h2 class="page-content-title"><b>Välkommen till TFs 150:nde årsfest</b></h2>
                    <p class="page-content-text">
                        Teknologföreningen firar sina 150 verksamhetsår med en makalös jubileumsårsfest lördagen den 19 mars 2022. Vi önskar alla inbjudna gäster, TFare samt avecer hjärtligt välkomna och fira med oss!
                    </p>
                    <p class="page-content-text">
                        Festligheterna inleds med solenn akt på Tekniska Muséet i Gammelstaden, där man har möjlighet att framföra hälsningar till jubilaren. Därefter fortsätter festligheterna med cocktail och bankett i festutrymmet Wirtaamo. Efter banketten följer efterfest i nationshuset Urdsgjallar i Otnäs, dit det ordnas busstransport. Sillfrukost ordnas på söndagen den 20 mars i Urdsgjallar.
                    </p>
                    
                    <p class="page-content-text">
                        Klädsel: Högtidsdräkt med akademiska hederstecken.
                    </p>
                        
                    <p class="page-content-text">
                        Anmälan för inbjudna gäster samt deras avecer öppnar den 31 januari klockan 12. Den öppna anmälan för alla TFare samt deras avecer öppnar den 7 februari klockan 12. Vänligen observera att avecer bör fylla i sin egen anmälan.
                    </p>
                        
                    <p class="page-content-text">
                        Notera att anmälan går att avboka tills 14.2, varefter den blir bindande. För att kunna njuta av en så säker fest som möjligt kommer rådande restriktioner beaktas. Vänligen läs igenom Coronainfon för mer information.
                    </p>
                    <p class="content-list">
                        Priser
                    </p>
                    <p class="content-list">
                        Supékort, studerande            100 €
                    </p>
                    <p class="content-list">
                        Supékort, övriga            120 €
                    </p>
                    <p class="content-list">
                        Understödspris            300 €
                    </p>
                        
                    <p class="content-list">
                        Sillfrukost förköp/vid dörren         12 € / 14 € <br/><br/>
                    </p>
            
                    <p class="page-content-text">
                        Teknologföreningen bjuder på ett supékort ifall det nämns i inbjudan.
                    </p>
            
                    <p class="content-list">
                        <b>Tidtabell</b><br/>
                    </p>
            
                    <p class="content-list">
                        <b>19.3.2022</b>
                    </p>
                    <p class="content-list">
                        Solenn akt            15:00                  Tekniska Muséet, Viksvägen 1
                    </p>
                    <p class="content-list">
                        Cocktail                 17:00        Wirtaamo, Katarina av Sachsens gata 9
                    </p>
                    <p class="content-list">
                        Bankett                 18:00                  Wirtaamo, Katarina av Sachsens gata 9<br/><br/>
                    </p>
                    <p class="content-list">
                        <b>20.3.2022</b>
                    </p>
                    <p class="content-list">
                        Sillfrukost             12:00                  Urdsgjallar, Otsvängen 22<br/><br/>
                    </p>
                        
                    <p class="page-content-text">
                        Vid frågor, kontakta årsfestmarskalkerna på arsfest@tf.fi
                    </p>
                </div>
            </div>
        </div>
    </div>
    <img src="./assets/top_left.svg" class="img-top-left"></img>
    <img src="./assets/bot_left.svg" class="img-bottom-left"></img>
    <img src="./assets/top_right.svg" class="img-top-right"></img>
    <img src="./assets/bot_right.svg" class="img-bottom-right"></img>
    </>
    )
}

export default Home;