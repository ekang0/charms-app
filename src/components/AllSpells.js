import SpellCard from "./SpellCard";

function AllSpells( spells ) {
  const cards = spells.spells.map((spell) => { 
    return (
      <SpellCard key={spell.id} spell={spell}/>
    )
    });

  const pTagStyle = {
    fontSize: "15px"
  };

  
  return (
    <div >
      <h4 className="h4Style">Swish & Flick</h4>
      <p style={pTagStyle}>list of all spells</p>
      <div>
        {cards}
      </div>
    </div>
  )
};

export default AllSpells;