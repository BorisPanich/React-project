import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Q8EiXvfHSAAHT5PjhNkHC3nKICKfTNWDCw&usqp=CAU'/>
        </header>
    )
}

export default Header;