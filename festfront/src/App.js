import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './Views/Home';
import Historik from './Views/Historik';
import Vettoetikett from "./Views/Vettoetikett";
import Coronainfo from "./Views/Coronainfo";
import Fundraising from "./Views/Fundraising";
import Fotoinfo from "./Views/Fotoinfo";
import Anmalan from "./Views/Anmalan"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/historik" element={<Historik />}/>
          <Route path="/vettoetikett" element={<Vettoetikett />}/>
          <Route path="/coronainfo" element={<Coronainfo />}/>
          <Route path="/fundraising" element={<Fundraising />}/>
          <Route path="/fotoinfo" element={<Fotoinfo />}/>
          <Route path="/anmalan" element={<Anmalan />}/>
          {//<Route path="/anmalan" component={deltagaranmalan}/>
          //<Route path="/fotoinfo" component={fotoinfo}/>
          //<Route path="/coronainfo" component={coronainfo}/>
          //<Route path="/fundraising" component={fundraising}/>
          //<Route path="/vettoetikett" component={vettoetikett}/>
          }
        </Routes>
      </Router>
      <img src="./assets/top_left.svg" className="img-top-left"></img>
      <img src="./assets/bot_left.svg" className="img-bottom-left"></img>
      <img src="./assets/top_right.svg" className="img-top-right"></img>
      <img src="./assets/bot_right.svg" className="img-bottom-right"></img>
    </>
  );
}

export default App;
