import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/scroll'


function App() {
	const [punks, setPunks] = useState([])
	const [searchfield, setSearchfield] = useState('')

	const fetchData = async ()=> {
		await fetch('https://cryptopunks.herokuapp.com/api/punks/')
		.then(response => response.json())
		.then(users => setPunks(users.sort(() => 
			0.5 - Math.random()).slice(0, 20)))};
	
	useEffect(() => {fetchData()}, [])

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
			<div className="banner">
				<button onClick={fetchData} className='pa3 mb3 br3 ba'>Refresh Punks!!!</button>
				<SearchBox searchChange={onSearchChange}/>
			</div>
			<Scroll>
				<CardList punks={filteredPunks} />
			</Scroll>
		</div>
		);
	}
}

export default App;