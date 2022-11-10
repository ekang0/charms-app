import { useState } from "react";

function AddSpell() {
  const [ formData, setFormData ] = useState({
    spell_name : "",
    description : "",
    unforgivable: null
  });

  const pTagStyle = {
    fontSize: "15px"
  };

  function handleSubmit(e) {
    e.preventDefault();
    //console.log("submit works")
    //alert("Spell was submitted");
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
          <input type="text" ></input>
        </label>
        <br></br>
        <label>{"description "}
          <input type="text" ></input>
        </label>
        <br></br>
        <label>{"unforgivable "}
          <select>
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