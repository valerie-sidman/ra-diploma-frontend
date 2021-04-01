import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/header-logo.png';
import banner from '../img/banner.jpg';
import { useSelector, useDispatch } from 'react-redux';
import {
  highlightingMenuItem,
} from '../actions/actionCreators';

export default function Header() {

  const { clickedItem } = useSelector(state => state.serviceToggleState);
  const dispatch = useDispatch();

  const handleToggleClassName = (clickedItem) => {
    dispatch(highlightingMenuItem(clickedItem))
  }

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Bosa Noga" />
            </Link>
            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className={clickedItem === 'main' ? 'nav-item active' : 'nav-item'} onClick={() => handleToggleClassName('main')}>
                  <Link className="nav-link" to="/">Главная</Link>
                </li>
                <li className={clickedItem === 'catalog' ? 'nav-item active' : 'nav-item'} onClick={() => handleToggleClassName('catalog')}>
                  <Link className="nav-link" to="/catalog">Каталог</Link>
                </li>
                <li className={clickedItem === 'about' ? 'nav-item active' : 'nav-item'} onClick={() => handleToggleClassName('about')}>
                  <Link className="nav-link" to="/about">О магазине</Link>
                </li>
                <li className={clickedItem === 'contacts' ? 'nav-item active' : 'nav-item'} onClick={() => handleToggleClassName('contacts')}>
                  <Link className="nav-link" to="/contacts">Контакты</Link>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                  <input className="form-control" placeholder="Поиск" />
                </form>
              </div>
            </div>
          </nav>
          <div className="row">
            <div className="col">
              <div className="banner">
                <img src={banner} className="img-fluid" alt="К весне готовы!" />
                <h2 className="banner-header">К весне готовы!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
