import React from "react";
import Nav from "../components/Nav";

const Vettoetikett = () => {
  return (
    <>
    <div className="center-page">
      <Nav activePage='/vettoetikett'/>
      <div className="page-content">
        <h1 className="text-3xl mb-4">Vett och etikett</h1>
        <h2 className="text-2xl">Klädkod</h2>
        <p className="mb-3">
          Klädkoden för akademiska tillställningar anges vanligen i inbjudan*. För akademiska högtidsfester, oftast Årsfester, 
          brukar klädkoden Högtidsdräkt med akademiska ordnar vara praxis. Denna klädkod kan utgöras av ett (1) av följande alternativ:
        </p>
        <p className="mb-3"><i>*Anges ingen klädkod kan man anta att klädseln är fri men sannolikt ändå obligatorisk. 
          Kanske värt att kolla med värden?</i></p>
        <h3 className="text-xl">Frack</h3>
        <div className="mb-3">
          <p className="mb-3">
            Fracken utgörs av en svart frackrock och svarta frackbyxor. Till dessa bärs vit frackskjorta, vit väst samt vit fluga. 
          </p>
          <p className="mb-3">
            Bra att veta om hur man bär en frack:
            <br />
            För att bära upp byxorna används hängslen (gärna vita), aldrig bälte. 
            <br />
            Till en frackskjorta hör speciella löstagbara skjortknappar, ofta i guld eller pärlemor.
            <br />
            Till frack bärs svarta lackskor och svarta, långa strumpor.
          </p>
          Armbandsur hör inte hemma tillsammans med fracken, i stället kan ett fickur i kedja bäras. Ett sådant bärs fastsatt 
          i rockens vänstra insida eller i vänster hängselstropp och löper diskret ned i vänster byxficka. Kedjan bör inte löpa över frackvästen.
        </div>
        <h3 className="text-xl">Långklänning</h3>
        <p className="mb-3">
          Långklänningen karaktäriseras, som namnet låter påskina, främst av sin längd. En långklänning kan i praktiken ha vilken färg som helst, 
          vara ärmlös eller långärmad, men den bör nå ända ned till bärarens vrister.
        </p>
        <div className="mb-3">
        Bra att veta om hur långklänning bärs:
        <br />
        Till långklänning bör håret vara uppsatt så det inte vilar på axlarna.
        <br />
        Innan man sätter sig till bords bör bärarens axlar vara täckta med t.ex. en sjal.
        <br />
        Festliga skor med eller utan klack, gärna slutna så att tån täcks.
        <br />
        Armbågslånga handskar kan bäras, dessa bör tas av till middagen.
        </div>
        <h3 className="text-xl">Övriga alternativ</h3>
        <p className="mb-3">
          En frack eller långklänning kan ersättas av en mörk kostym, folkdräkt eller högtidlig tjänsteuniform (militär-, polis- mm. dock inte M05).
        </p>
        <h3 className="text-xl">Akademiska hederstecken, band, mm.</h3>
        <p className="mb-3">
          Då inbjudan påbjuder Akademiska hederstecken, alternativt Akademiska ordnar, avses bl.a. Kår- och nationsband samt eventuella 
          medaljer, pinsar och motsvarande tecken. Regler för hur band och prenikor bärs skiljer sig ofta mellan olika föreningar och orter. 
          Nedanstående utgår ifrån Teknologföreningens förfarande, bär man övriga föreningars tecken bör man kolla upp separat hur dessa skall bäras.
        </p>
        <h3 className="text-xl">Kår- eller nationsband</h3>
        <p className="mb-3">
          Nationsbandet signalerar bärarens stundentkårs- eller nationstillhörighet, och bärs oftast vid tillfällen då man representerar sin nation 
          eller på årsfester. TF:s rödgula nationsband får bäras av alla nationens medlemmar samt övriga som därtill delats rättighet.
        </p>
        <p className="mb-3">
          Till frack bärs nationsbandet under västen, löpande i en vinkel på pi/4 radianer från vänster höft upp mot höger axel. Bandet bör löpa 
          mellan frackskjortans guldknappar (mao mellan den andra och tredje knappen uppifrån räknat).
        </p>
        <p className="mb-3">
          Till långklänning bärs TF:s nationsband endera på samma sätt som till frack, dock så att det aldrig löper över bar hud, eller vikt till en rosett. 
          I det senare fallet bärs rosetten fäst på höger sida av bröstet (till skillnad från många andra motsvarande band).
        </p>
        <p className="mb-3">
          Till mörk kostym bärs bandet vikt över vänster kavajslag eller vikt till en rosett, då på höger bröst.
        </p>
        <h3 className="text-xl">Heders- och förtjänsttecken</h3>
        <p>
          Många heders- och förtjänsttecken har egna reglementen för hur de bör bäras, men några generella tumregler kan ändå slås fast:
        </p>
        <p className="mb-3">
          Pinsar bärs på vänster rockslag eller vänster sida av klänningen i brösthöjd
          <br />
          Medaljer bärs på frackens/kavajens bröstficka (obs, ersätter då näsduk) eller på vänster sida av klänningen i brösthöjd.
        </p>
        <h2 className="text-2xl pt-3">Årsfestens olika skeden </h2>
        <h3 className="text-xl">Solenn Akt</h3>
        <p className="mb-3">
          En årsfest är mycket mer än bara en middag. Festligheterna inleds med den mest formella biten, den Solenna Akten, 
          där inbjudna gäster och andra hugade överräcker sina hälsningar till värden. En solenn akt besöks främst av inbjudna 
          representanter för gästande föreningar, men är oftast öppen för alla intresserade årsfestdeltagare.
        </p>
        <h3 className="text-xl">Cocktail</h3>
        <p className="mb-3">
          Efter den Solenna Akten brukar en fördrink serveras på eller i direkt anslutning till bankettlokalen. Under cocktailtillfället 
          har du möjlighet att i god tid leta reda på en sittordningskarta och hitta ditt bordssällskap. Detta är samtidigt ett bra tillfälle 
          att mingla med gamla och nya bekanta.
        </p>
        <h3 className="text-xl">Årsfestbankett</h3>
        <p className="mb-3">
          Middagen eller Banketten inleds med det högtidliga inbärandet av fanorna. Då fanbärarna marscherar in står deltagarna upp och hälsar 
          fanorna genom att följa dessa med blicken. Under fanornas intåg sjunger en ensemble Polyteknikernas Marsch, medan festpubliken är tyst. 
          Då fanorna anlänt sätter sig deltagarna och banketten inleds med Helan (se Sångkultur på TF:s årsfest).
        </p>
        <p className="mb-3">
          Banketten går vidare med förrätt, huvudrätt och efterrätt, under vilka flera tal brukar hållas, bl.a. av Kurator, Styrelseordförande och 
          inbjudna talare. Då en talare eller sångledare talar eller då det sjungs är det oartigt att röra sig i salen. Försök alltså pricka in 
          eventuella besök till baren och toaletten till tal- och sångfria stunder. Observera att på TF finns det ingen konferenskultur; du behöver 
          inte prompt vänta tills huvudrätten är utdukad innan du får stiga upp. 
        </p>
        <p className="mb-3">
          Efter avklarade tre rätter ställs det igång till dans. Ifall detta kräver fysisk ommöblering brukar gästerna hänvisas till baren för mingel 
          i väntan på att dansgolvet ställs i ordning. Efter danserna är den formella delen av kvällen slutligen förbi, och fri samvaro i form av 
          nachspiel tar vida.
        </p>
        <h2 className="text-2xl pt-3">Sångkultur på TF:s årsfest</h2>
        <p className="mb-3">
          Årsfestfågeln är en för varje Årsfestbankett unik, nyskriven Fågel, som uppförs av Sångledarna före Helan Går. Allsången inleds 
          alltså inte med “Ha-tchi-tchi”! Banketten brukar innehålla en hel del program utöver allsång - t.ex. tal och musikuppträdanden. 
          Detta innebär att det ofta finns ett ganska strikt tidsschema att följa. Undvik därför att ropa “TEMPO!”, eftersom det kan sätta 
          Sångledarna i en besvärlig situation, om det av tidtabellsmässiga skäl inte är möjligt att sjunga just då.
        </p>
        <p className="mb-3">
          För att förgylla stämningen under banketten brukar allsången delvis bestå av stämsånger. Dessa brukar övas med nationsmedlemmarna på 
          Stämsångssitzen, som ordnas under årsfestveckan. Om du aldrig sjungit stämsånger förut ska du inte vara orolig - på TF sjunger vi hellre 
          än väl! 
        </p>
      </div>
    </div>
    </>
  )
}

export default Vettoetikett;