import React, {Component} from 'react';
import './Deck.css';
import Card from './Card'
import { or } from 'ip';

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
    
    selectCard(num) {
        if(num < 0 || num >= this.state.data.length) return;
        this.setState({ selected: num });
    }

    prev = () => {
        const prev = this.state.selected - 1;
        this.selectCard(prev);
    }

    next = () => {
        const next = this.state.selected + 1;
        this.selectCard(next);
    }

    render() {

        const { selected, data } = this.state;

        return(
            <div className="Deck">
                <p>
                    This is the DECK Component.
                </p>
                <Card card={data[selected]} />
                <button onClick={this.prev}>Prev</button>
                <button onClick={this.next}>Next</button>
            </div>
        );
    }
}

export default Deck;