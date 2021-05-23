import React from 'react';
import styles from './Paginator.module.css';
import userPhoto from '../../assets/images/photo.png'
import {NavLink} from 'react-router-dom';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Paginator: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged, }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i);

    return <div>
        <div>
            {pages.map(p => {
                return <span className={p === currentPage ? styles.selectedPage : ''}
                             onClick={() => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>

    </div>
}

export default Paginator;