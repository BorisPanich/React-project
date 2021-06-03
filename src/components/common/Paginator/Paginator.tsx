import React, { useState } from 'react';
import styles from './Paginator.module.css';
import userPhoto from '../../assets/images/photo.png'
import {NavLink} from 'react-router-dom';

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i);

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={styles.paginator}>
        {
            portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>prev</button>
        }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span className={p === currentPage ? styles.selectedPage : ''}
                             key={p}
                             onClick={() => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        {
            portionCount > portionNumber && <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>next</button>
        }
    </div>
}

export default Paginator;