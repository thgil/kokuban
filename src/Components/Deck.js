import React, {Component} from 'react';
import './Deck.css';

class Deck extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            data: [{title:'test1'},{title:'test2'},{title:'test3'}],
            selected: 0
        }
    }
    
    componentDidMount() {

    }   
    
    render() {

        const { selected } = this.state;

        return(
            <div className="Deck">
                {selected}
                <p>
                    This is the DECK Component.
                </p>
            </div>
        );
    }
}

export default Deck;