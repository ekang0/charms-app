import { useState } from "react";

function AddSpell( { onAddSpell }) {
  const [ formData, setFormData ] = useState({
    spell_name : "",
    description : "",
    unforgivable: null
  });

  const pTagStyle = {
    fontSize: "15px"
  };

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  function handleSubmit(e) {
    e.preventDefault();
    //alert("Spell was submitted");
    const newSpell = {
      spell_name : formData.spell_name,
      description : formData.description,
      unforgivable: formData.unforgivable === "true" ? true : false
    };
    
    fetch("http://localhost:3004/spells", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newSpell)
    })
    .then(res => res.json())
    .then(newSpell => onAddSpell(newSpell));
  };


  return (
    <div>
      <div>
        <h4 className="h4Style">Add a Spell</h4>
        <p style={pTagStyle}>Professor Flitwick forgot a spell</p>
        <p style={pTagStyle}>fill out and submit to add a spell</p>
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>{"spell name "} 
          <input type="text" name="spell_name" onChange={handleChange}></input>
        </label>
        <br></br>
        <label>{"description "}
          <input type="text" name="description" onChange={handleChange}></input>
        </label>
        <br></br>
        <label>{"unforgivable "}
          <select name="unforgivable" onChange={handleChange}>
            <option value="false">false</option>
            <option value="true">true</option>
          </select>
        </label>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
};

export default AddSpell;