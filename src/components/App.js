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
  //console.log("spellsList is ", spellsList)

  //const firstSpell = spells[0];
  //console.log(firstSpell)

  return (
    <div className="App">
      <header>
        <Header/>
        <Navbar/>
        <br></br>
        <Switch>
          <Route path="/all">
            <AllSpells/>
          </Route>
          <Route path="/sinister">
            <SinisterSpells/>
          </Route>
          <Route path="/add">
            <AddSpell/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </header>
      <div>
        {spells.map((spell) => { 
          return (
            <SpellCard key={spell.id} spell={spell}/>
          )
          })}
      </div>
    </div>
  );
}

export default App;
