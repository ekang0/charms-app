import logo from '../logo.svg';
import '../App.css';
import Navbar from './Navbar';
import Header from './Header';
import { useState, useEffect } from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import AllSpells from "./AllSpells";
import SinisterSpells from "./SinisterSpells";

function App() {
  const [spells, setSpells] = useState([])

  useEffect(() => {
    fetch("http://localhost:3004/spells")
    .then(res => res.json())
    .then(spellsData => setSpells(spellsData))
  }, [])

  const spellsList = spells.map((spell) => {
    return (
      <div key={spell.id}>{spell.spell_name}
      </div>
    )
  });

  return (
    <div className="App">
      <header>
        <Header/>
        <Navbar/>
        <Switch>
          <Route path="/All">
            <AllSpells/>
          </Route>
          <Route path="/Sinister">
            <SinisterSpells/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

        {spellsList}
      </header>
    </div>
  );
}

export default App;
