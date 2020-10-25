import React, { memo } from "react";
import style from './header.module.css';

const Header = memo(({ onSearchVideo }) => {
  return (
    <header id="header">
      <div className={style.container}>
        <div className={style.logo}></div>
        <form className={style.searchBar}>
          <input type="text" placeholder="search"/>
          <button type="submit" onClick={onSearchVideo}></button>
        </form>
        <div className={style.accountInfo}></div>
      </div>
    </header>
  );
});

export default Header;
