import logo from '../logo.svg';
import '../App.css';
import Navbar from './Navbar';
import Header from './Header';
import { useState, useEffect } from "react";

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
      <Header/>
      <Navbar/>
      <h3>wands at the ready</h3>
      {spellsList}
    </div>
  );
}

export default App;
