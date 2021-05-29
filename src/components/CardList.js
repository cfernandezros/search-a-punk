import React from 'react'
import Card from './Card';

const CardList = ({ punks }) => {
	const cardComponent = punks.map((punk, i) => {
		return (
			<Card 
			key={i} 
			id={punks[i].image.match(/\d+/)[0]}
			acc={punks[i].accessories}/>
			);
	})
	return (
		<div>
			{cardComponent}
		</div>
		);
}

export default CardList;