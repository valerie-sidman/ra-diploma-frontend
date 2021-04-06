import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../img/header-logo.png';
import banner from '../img/banner.jpg';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleClassName,
  toggleSearch,
  changeField
} from '../actions/actionCreators';

export default function Header() {

  const { clickedItem, search } = useSelector(state => state.serviceToggleState);
  const { cartItems } = useSelector(state => state.serviceSendingToCart);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleToggleClassName = (clickedItem) => {
    dispatch(toggleClassName(clickedItem))
  }

  const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeField(name, value));
	}

  const handleToggleSearch = () => {
    if (search.isClicked) {
      dispatch(toggleSearch({
        isClicked: false,
        searchFieldLoupe: search.searchFieldLoupe,
      }));
      if (search.searchFieldLoupe) {
        dispatch(changeField('searchField', search.searchFieldLoupe));
        dispatch(toggleClassName('catalog'));
        history.push("/catalog");
      }
    } else {
      dispatch(toggleSearch({
        isClicked: true,
        searchFieldLoupe: '',
      }));
    }
  }

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/" onClick={() => handleToggleClassName('main')}>
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
                  <div data-id="search-expander" className="header-controls-pic header-controls-search"
                    onClick={() => handleToggleSearch()}>
                  </div>
                  <Link to={"/cart"} className="header-controls-pic header-controls-cart">
                    {
                      cartItems.length > 0
                        ? <div className="header-controls-cart-full">{cartItems.length}</div>
                        : <div className="header-controls-cart-menu"></div>
                    }
                  </Link>
                </div>
                <form data-id="search-form" 
                  className={search.isClicked ? 'header-controls-search-form form-inline' : 'header-controls-search-form form-inline invisible'}>
                  <input className="form-control" name='searchFieldLoupe' onChange={handleChange} value={search.searchFieldLoupe} placeholder="Поиск" />
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
