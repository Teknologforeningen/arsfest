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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/historik" element={<Historik />}/>
          {//<Route path="/anmalan" component={deltagaranmalan}/>
          //<Route path="/fotoinfo" component={fotoinfo}/>
          //<Route path="/coronainfo" component={coronainfo}/>
          //<Route path="/fundraising" component={fundraising}/>
          //<Route path="/vettoetikett" component={vettoetikett}/>
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;
