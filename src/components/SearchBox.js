import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div>
			<input 
				className='pa3 mb3 br3 ba '
				type='search' 
				placeholder='search punks' 
				onChange={searchChange}/>
		</div>
	);
}

export default SearchBox;