function Home() {
  const pTagStyle = {
    fontSize: "15px"
  };

  const imageStyle = {
    borderRadius: "20px",
    padding: "0",
    display: "block",
    margin: "0 auto",
    maxHeight: "auto",
    maxWidth: "95%",
    height: "auto"
  };

  
  return (
    <div>
      <h4 className="h4Style">W E L C O M E</h4>
      <p style={pTagStyle}>wands at the ready</p>
      <img style={imageStyle} width="auto" height="auto" alt="Professor Flitwick's charms class practicing levitation spell" src="https://images.ctfassets.net/usf1vwtuqyxm/23IGLVpSUYoES0mowGqOqC/09d766667b4f0ed30eabf31e3f0df919/WingardiumLeviosa_WB_F1_FlitwickTeachesCharmsClass_00356404.jpg?fm=jpg&q=70&w=2560"/>
      <p>Welcome to Professor Flitwick's online charms guide.</p>
      <p>Wands at the ready. Let's begin!</p>
    </div>
  )
};

export default Home;