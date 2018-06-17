import React, {Component} from 'react';
import './Deck.css';
import Card from './Card'
import { Button } from 'reactstrap';

class Deck extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			data: [ {title:'test0'},{title:'test1'},{title:'test2'},
							{title:'test3'},{title:'test4'},{title:'test5'} ],
			selected: 0
		}
	}
	
	componentDidMount() {
		const id = Number(this.props.match.params.id);
		if(id) this.selectCard(id);
		console.log(this.state.selected);
	}   
	
	selectCard(num) {
		if(num < 0 || num >= this.state.data.length) {
			console.warn('Selected card does not exist')
			return;
		}
		this.setState({ selected: num });
		// Update the url with the current card id
		this.props.history.push('/'+num);
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
			<small>Selected card: { selected }</small>
			<Card card={data[selected]} />
			<Button color="primary" onClick={this.prev}>Prev</Button>
			<Button color="primary" onClick={this.next}>Next</Button>
			</div>
		);
	}
}

export default Deck;