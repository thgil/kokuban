import React, {Component} from 'react';
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
                { card.title }
            </div>
        );
    }
}

export default Card;