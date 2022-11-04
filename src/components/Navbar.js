import {
  NavLink
} from "react-router-dom";


function Navbar() {
  const linkStyles = {
    background: "#4c6969",
    padding: "0px",
    overflow: "auto",
    color: "white",
    textDecoration: "none",
    margin: "0",
    width: "25%",
    float: "left",
  };


  return(
    <div className="navbar">
      <NavLink to="/all" style={linkStyles} activeStyle={{background: "#879f84"}}>all spells</NavLink>
      <NavLink to="/sinister" style={linkStyles} activeStyle={{background: "black"}}>sinister spells</NavLink>
      <NavLink to="/add" style={linkStyles} activeStyle={{background: "#879f84"}}>add a spell</NavLink>
      <NavLink exact to="/" style={linkStyles} activeStyle={{background: "#879f84"}}>home</NavLink>
    </div>
  )
};

export default Navbar;