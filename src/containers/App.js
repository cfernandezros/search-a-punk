import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/scroll'


function App() {
	const [punks, setPunks] = useState([])
	const [searchfield, setSearchfield] = useState('')

	useEffect (() => {
		fetch('https://cryptopunks.herokuapp.com/api/punks/')
		.then(response => response.json())
		.then(users => setPunks(users.sort(() => 
			0.5 - Math.random()).slice(0, 20)));
	}, [])

	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	}

	const filteredPunks = punks.filter(punk => {
		return punk.accessories.toString().toLowerCase().includes(searchfield.toLowerCase())
	});
	if (!punks.length) {
		return <h1 className='tc'>Loading...</h1>
	} else {
		return (
		<div className='tc'>
			<h1 className='f1'>search-a-punk</h1>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
				<CardList punks={filteredPunks} />
			</Scroll>
		</div>
		);
	}
}

export default App;