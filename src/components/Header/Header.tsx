import React from 'react';
import header from './Header.module.css';
import Search from "./SearchInput/Search";
import HeaderNavBarContainer from './HeaderNavBar/HeaderNavBarContainer';


const Header = (props: any) => {
  return (
    <header className={header.header}>
      <div>
        <a href='#' className={header.link}>
          <img src='https://iqonic.design/themes/socialv/html/images/logo.png' alt='logo' className={header.header__logo} />
          <h1 className={header.title}>SocialReact</h1>

        </a>
      </div>
      <Search />
      <HeaderNavBarContainer {...props}/>
    </header>
  )
}

export default Header;