import logo from '../logo.svg';
import '../App.css';
import Navbar from './Navbar';
import Header from './Header';
import { useState, useEffect } from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import AllSpells from "./AllSpells";
import SinisterSpells from "./SinisterSpells";
import AddSpell from "./AddSpell";
import SpellCard from "./SpellCard";
//import { Card } from "semantic-ui-react";

function App() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/spells")
    .then(res => res.json())
    .then(spellsData => setSpells(spellsData))
  }, []);

  const sinisterSpellsList = spells.filter((spell) => spell.unforgivable === true);


  return (
    <div className="App">
      <header>
        <Header/>
        <Navbar/>
        <br></br>
        <Switch>
          <Route path="/all">
            <AllSpells spells={spells}/>
          </Route>
          <Route path="/sinister">
            <SinisterSpells spells={sinisterSpellsList}/>
          </Route>
          <Route path="/add">
            <AddSpell/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </header>
    </div>
  );
};

export default App;
