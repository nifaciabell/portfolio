import Card from "react-bootstrap/Card";

function SEPage() {
  return (
    <div className="App">
      <h1>Software Engineering Projects</h1>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>Minesweeper Game</Card.Title>
          <Card.Img src=""></Card.Img>
          <Card.Link href="#">Click Here</Card.Link>
        </Card.Body>
      </Card>

      <br />
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>Nike App</Card.Title>
          <Card.Img src="https://images.unsplash.com/photo-1637844528612-064026615fcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></Card.Img>
          <Card.Link href="#">Click Here</Card.Link>
        </Card.Body>
      </Card>
      <br />
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>Cryptocurrency App</Card.Title>
          <Card.Img src="https://images.unsplash.com/photo-1629339938591-ec5e73815e47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"></Card.Img>
          <Card.Link href="#">Click Here</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SEPage;
