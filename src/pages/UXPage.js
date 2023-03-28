import Card from 'react-bootstrap/Card';


function UXPage() {
  return (
    <div className="App">
    <h1>UX Design Projects</h1>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Premiere Cinema </Card.Title>
  
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
    <br/>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Artesa Winery</Card.Title>
  
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
    <br/>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Speechcraft</Card.Title>
  
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default UXPage;