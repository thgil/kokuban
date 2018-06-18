import React, {Component} from 'react';
import './Deck.css';
import Card from './Card'
import { Button } from 'reactstrap';

class Deck extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			data: [ {primary:'お元気ですか', secondary:'How are you?'},
							{primary:'お疲れ様です', secondary:'Thanks for today'},
							{primary:'よろしくお願いします', secondary:'Nice to meet you.'},
							{primary:'いらっしゃいませ', secondary:'Welcome'},
							{primary:'いってきます', secondary:'I\'m leaving'},
							{primary:'いってらっしゃい', secondary:'See you. Take care'} ],
			selected: 0
		}
	}
	
	componentDidMount() {
		// Update the card id to match the url param if exists
		const id = Number(this.props.match.params.id);
		if(id) this.selectCard(id);

		document.addEventListener('keydown', this.handleKeyDown);
	}
	
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown);
	}
	
	componentWillReceiveProps(newProps) {
		// Update the card id if the url changes
		this.setState({ selected: Number(newProps.match.params.id) });
	}

	handleKeyDown = (event) => {
		if(event.keyCode == 32) this.nextCard();
	}

	selectCard(num) {
		// Check card id is in the array
		if(num < 0 || num >= this.state.data.length) {
			console.warn('Selected card does not exist')
			return;
		}
		this.setState({ selected: num });
		// Update the url with the current card id
		this.props.history.push('/'+num);
	}
	
	prevCard = () => {
		const prev = this.state.selected - 1;
		this.selectCard(prev);
	}
	
	nextCard = () => {
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
				<Button color="primary" onClick={this.prevCard}>Prev</Button>
			 	<span> </span>
				<Button color="primary" onClick={this.nextCard}>Next</Button>
			</div>
		);
	}
}

export default Deck;