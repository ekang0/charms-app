function Footer() {
  const footerStyle = {
    background: "#879f84",
    marginTop: "80px",
    color: "white",
    fontSize: "15px",
    bottom: "0"
  };


  return (
    <div className="footer" style={footerStyle}>
      <p>"Working hard is important. But there is something that matters even more: </p>
      <p>Believing in yourself." - <b>Harry Potter</b></p>
    </div>
  )
};

export default Footer;