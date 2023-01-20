import '../App.css';
import { useState, useEffect } from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Navbar';
import Header from './Header';
import Home from "./Home";
import AllSpells from "./AllSpells";
import SinisterSpells from "./SinisterSpells";
import AddSpell from "./AddSpell";
//import { Card } from "semantic-ui-react";
import Footer from './Footer';

function App() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/spells")
    .then(res => res.json())
    .then(spellsData => setSpells(spellsData))
  }, []);

  const sinisterSpellsList = spells.filter((spell) => spell.unforgivable === true);

  function handleAddSpell(newSpell) {
    setSpells([...spells, newSpell])
  };


  return (
    <div className="App">
      <header>
        <Header/>
        <Navbar/>
        <br></br>
        <Switch>
          <Route path="/spells/all">
            <AllSpells spells={spells}/>
          </Route>
          <Route path="/spells/sinister">
            <SinisterSpells spells={sinisterSpellsList}/>
          </Route>
          <Route path="/spells/add">
            <AddSpell onAddSpell={handleAddSpell}/>
          </Route>
          <Route exact path="/spells">
            <Home/>
          </Route>
        </Switch>
      </header>
      <br></br>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default App;
