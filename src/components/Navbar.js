import {
  NavLink
} from "react-router-dom";

function Navbar() {
  const navStyle = {
    maxHeight: "auto",
    maxWidth: "100%"
  };

  const linkStyles = {
    background: "#4c6969",
    textDecoration: "none",
    color: "white",
    padding: "0px",
    margin: "0",
    width: "25%",
    overflow: "auto",
    display: "inline-block"
  };


  return(
    <div className="navbar" style={navStyle}>
      <NavLink exact to="/spells" style={linkStyles} activeStyle={{background: "#879f84"}}>home</NavLink>
      <NavLink to="/spells/all" style={linkStyles} activeStyle={{background: "#879f84"}}>all spells</NavLink>
      <NavLink to="/spells/sinister" style={linkStyles} activeStyle={{background: "black"}}>sinister spells</NavLink>
      <NavLink to="/spells/add" style={linkStyles} activeStyle={{background: "#879f84"}}>add a spell</NavLink>
    </div>
  )
};

export default Navbar;