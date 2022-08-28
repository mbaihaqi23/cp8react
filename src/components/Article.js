import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Article(props) {
    return (
      <Card bg="dark" text="white" className="text-center mb-2" style={{ width: '20rem' }}>
        <Card.Header as="h5">{props.title}</Card.Header>
        <Card.Body>
          <Card.Text>
             {props.body}
          </Card.Text>
          <Button variant="outline-light">Details</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
  }
  
  export default Article;