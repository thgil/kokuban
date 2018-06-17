import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import './Card.css';

class Card extends Component {
  
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    
  }   
  
  render() {
    
    const { card } = this.props;
    
    return(
      <div className="Card">
        <Row>
          <Col>
            { card.title }
          </Col>
        </Row>
      </div>
    );
  }
}

export default Card;