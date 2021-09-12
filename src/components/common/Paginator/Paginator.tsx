import React, {useState} from 'react';
import us from './Paginator.module.css';

type PaginatorType = {
	currentPage?: number
	onPageChanged?: (page: number) => void
	totalItemsCount: number
	pageSize: number
	portionSize?: number
}

export const Paginator = ({
														totalItemsCount,
														pageSize,
														onPageChanged,
														currentPage = 1,
														portionSize = 10
													}: PaginatorType) => {

	const pagesCount = Math.ceil(totalItemsCount / pageSize)

	const pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	const portionCount = Math.ceil(pagesCount / portionSize);
	const [portionNumber, setPortionNumber] = useState<number>(1);

	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;


	return (
		<div className={us.pagination_wrap}>

			{ portionNumber > 1 &&
      <button className={us.prevBtn} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

			{pages
				.filter(page =>  page >= leftPortionPageNumber && page <= rightPortionPageNumber)
				.map((page, ind) => {
				return <p  onClick={() => {
					onPageChanged && onPageChanged(page)
				}} key={ind} className={currentPage === page ? us.selected : us.page}>{page}</p>
			})}

			{ portionCount > portionNumber &&
      <button className={us.nextBtn}   onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
		</div>
	)
}

