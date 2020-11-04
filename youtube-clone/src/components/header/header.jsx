import React, {memo, useRef} from "react";
import style from './header.module.css';
import {useDispatch} from 'react-redux';

const Header = memo(({ onSearchVideo }) => {
  const dispatch = useDispatch();
  const searchInput = useRef('');
  const handleOnSearch = () => {

  };
  return (
    <header id="header">
      <div className={style.container}>
        <div className={style.logo}></div>
        <form ref={searchInput} className={style.searchBar}>
          <input type="text" placeholder="search"/>
          <button type="submit" onClick={() => dispatch({type: ''})}></button>
        </form>
        <div className={style.accountInfo}></div>
      </div>
    </header>
  );
});

export default Header;
