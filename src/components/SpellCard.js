function SpellCard (spell) {
  const {spell: {description}, spell: {id}, spell:{spell_name}, spell: {unforgivable}} = spell;
  
  const cardStyle = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    float: "left",
    margin: "15px",
    inlineSize: "300px",
    overflowWrap: "break-word",
    background: "#eeeee6",
    textAlign: "center",
    overflow: "hidden",
    textAlign: "justify"
  };

  const containerStyle = {
      padding: "30px 35px",
  };

  const descriptionStyle = {
    fontSize: "10px"
  };
  

  return (
    <div className="card" id={id} style={cardStyle}>
      <div className="container" style={containerStyle}>
        <p><b>{spell_name}</b></p>
        <p style={descriptionStyle}>{description}</p>
        <p>{unforgivable}</p>
      </div>
    </div>
  )
};

export default SpellCard;