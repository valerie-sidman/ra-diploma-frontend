import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchCatalogElements, changeCategoryClassName } from '../actions/actionCreators';

export default function CatalogBody() {

  const { categories, loadingCategories, categoriesError } = useSelector(state => state.serviceCategories);
  const { catalogElements, loadingCatalogElements, elementsError } = useSelector(state => state.serviceCatalogElements);
  const dispatch = useDispatch();


  useEffect(() => {
    fetchCategories(dispatch);
    fetchCatalogElements(dispatch);
  }, [dispatch]);

  if (loadingCategories || loadingCatalogElements) {
    return (
      <>
        <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </>
    )
  } 

  if (categoriesError) {
    return (
      <>
        {console.log('Error with loading categories!!!')}
      </>
    )
  } else if (elementsError) {
    <>
      {console.log('Error with loading catalog elements!!!')}
    </>
  }


  const handleSwitchCategory = (e, categoryId) => {
    e.preventDefault();
    dispatch(changeCategoryClassName(categoryId));
    fetchCatalogElements(dispatch, categoryId);
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

      <div className="row">
        {catalogElements.map(o =>
          <div className="col-4" key={o.id}>
            <div className="card catalog-item-card">
              <img src={o.images[0]}
                className="card-img-top img-fluid" alt={o.title} />
              <div className="card-body">
                <p className="card-text">{o.title}</p>
                <p className="card-text">{o.price} руб.</p>
                <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-center">
        <button className="btn btn-outline-primary">Загрузить ещё</button>
      </div>
    </>
  )
}