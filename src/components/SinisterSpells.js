import SpellCard from "./SpellCard";

function SinisterSpells({ spells }) {
  const pTagStyle = {
    fontSize: "15px"
  };

  const cards = spells.map((spell) => {
    return (
      <SpellCard key={spell.id} spell={spell}/>
    )
  });

  
  return (
    <div>
      <h4 className="h4Style">Unforgivable Curses</h4>
      <p>so you've decided to dabble in the dark arts</p>
      <p style={pTagStyle}>list of all curses</p> 
      <div>
        {cards}
      </div>
    </div>
  )
};

export default SinisterSpells;