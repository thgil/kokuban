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
            <div className="Primary">{ card.primary }</div>
            <div className="Secondary">{ card.secondary }</div>

          </Col>
        </Row>
      </div>
    );
  }
}

export default Card;