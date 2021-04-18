import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
    // id: number | null
    // email: string | null
    isAuth: boolean | null
    login: string | null | undefined
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Q8EiXvfHSAAHT5PjhNkHC3nKICKfTNWDCw&usqp=CAU'/>
                <div className={s.loginBlock}>
                    { props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>log out</button> </div>
                        : <NavLink to={'/login'}>log in</NavLink>}
                </div>
        </header>
    )
}

export default Header;