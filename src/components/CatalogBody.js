/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCategories,
  fetchCatalogElements,
  changeCategoryClassName,
  delaySearch,
} from '../actions/actionCreators';
import CatalogElement from './CatalogElement';

export default function CatalogBody() {

  const { categories, loadingCategories, categoriesError } = useSelector(state => state.serviceCategories);
  const { catalogElements, stock, loadingCatalogElements, elementsError } = useSelector(state => state.serviceCatalogElements);
  const { search } = useSelector(state => state.serviceToggleState);
  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories(dispatch);
    }
    if (search.searchField) {
      if (search.timeout) {
        clearTimeout(search.timeout);
      }
      const selectedCategory = categories.find(c => c.className.includes('active'));
      dispatch(delaySearch(setTimeout(() => fetchCatalogElements(dispatch, selectedCategory.id, null, search.searchField), 1000)))
    } else {
      fetchCatalogElements(dispatch, -1, null, search.searchField);
    }

  }, [dispatch, search.searchField]);

  // обработка ошибки

  if (categoriesError) {
    history.push("/errorloading");
    return (
      <>
        {console.log('Error with loading categories!!!')}
      </>
    )
  } else if (elementsError) {
    history.push("/errorloading");
    <>
      {console.log('Error with loading catalog elements!!!')}
    </>
  }

  // конец обработки ошибки

  const handleSwitchCategory = (e, categoryId) => {
    e.preventDefault();
    dispatch(changeCategoryClassName(categoryId));
    fetchCatalogElements(dispatch, categoryId, null, search.searchField);
  }

  const handleMoreElements = (e, categoryId, offset) => {
    e.preventDefault();
    fetchCatalogElements(dispatch, categoryId, offset, search.searchField);
  }

  return (
    <>
      <ul className="catalog-categories nav justify-content-center">
        {categories.map(o =>
          <li className="nav-item" key={o.id}>
            <a className={o.className} href="/#" onClick={(e) => handleSwitchCategory(e, o.id)}>{o.title}</a>
          </li>
        )}
      </ul>

      <CatalogElement catalogElements={catalogElements} />

      { !stock ? null :
        <div className="text-center">
          <button className="btn btn-outline-primary" onClick={(e) =>
            handleMoreElements(e, categories.find(o => o.className.includes('active')).id, catalogElements.length)
          }>Загрузить ещё</button>
        </div>
      }

      {
        // обработка загрузки
        loadingCategories || loadingCatalogElements ?
          <div className="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div> : null
        // конец обработки загрузки
      }
    </>
  )
}
