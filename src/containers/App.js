import React from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/scroll'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			punks: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://cryptopunks.herokuapp.com/api/punks/')
		.then(response => response.json())
		.then(users => this.setState({ punks: users.sort(() => 
			0.5 - Math.random()).slice(0, 20) }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { punks, searchfield } = this.state
		const filteredPunks = punks.filter(punk => {
			return punk.accessories.toString().toLowerCase().includes(searchfield.toLowerCase())
		});
		if (!punks.length) {
			return <h1 className='tc'>Loading...</h1>
		} else {
			return (
			<div className='tc'>
				<h1 className='f1'>search-a-punk</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList punks={filteredPunks} />
				</Scroll>
			</div>
			);
		}
	}
}

export default App;