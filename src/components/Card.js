import React from 'react';

const Card = ({ acc, id }) => {
	return (
		<div className ='tc dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='punks' src={`https://www.larvalabs.com/cryptopunks/cryptopunk${id}.png`} />
			<div>
				<h2>[{id}]</h2>
				<h3>{acc.map(elem => 
					(acc.length !== acc.indexOf(elem) + 1) ? elem + ' + ' : elem)}</h3>
			</div>
		</div>
		);
}

export default Card;

