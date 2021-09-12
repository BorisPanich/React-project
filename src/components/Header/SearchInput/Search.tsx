import React from 'react';
import search from './Search.module.css';

const Search = () => {
	return (
		<div className={search.iqSearchBar}>
			<form action="#" className={search.searchbox}>
				<input type="text" className={`${search.text} ${search.searchInput}`} placeholder="Type here to search..." />
					<a className={search.searchLink} href="#"></a>
			</form>
		</div>
	)
}

export default Search;
