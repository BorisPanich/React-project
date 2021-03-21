import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import {HeaderContainerPropsType} from "./HeaderContainer";

type HeaderPropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean | null
}

const Header = (props: HeaderContainerPropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Q8EiXvfHSAAHT5PjhNkHC3nKICKfTNWDCw&usqp=CAU'/>
                <div className={s.loginBlock}>
                    { props.isAuth ? props.state.login : <NavLink to={'/login'}>log in</NavLink>}
                </div>
        </header>
    )
}

export default Header;