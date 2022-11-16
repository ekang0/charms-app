function Footer() {
  const footerStyle ={
    background: "#4c6969",
    marginTop: "80px",
    color: "white",
    fontSize: "15px",
    bottom: "0"
  }

  return (
    <div className="footer" style={footerStyle}>
      <p>Working hard is important. But there is something that matters even more: </p>
      <h3 style={{color: "#879f84"}}>Believing in yourself.</h3>
    </div>
  )
};

export default Footer;