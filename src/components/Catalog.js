import React from 'react';
import CatalogBody from './CatalogBody';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from '../actions/actionCreators';

export default function Catalog() {

  const { search } = useSelector(state => state.serviceToggleState);
  const dispatch = useDispatch();

  const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeField(name, value));
	}

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            <form className="catalog-search-form form-inline">
              <input className="form-control" name='searchField' onChange={handleChange} value={search.searchField} placeholder="Поиск" />
            </form>

            <CatalogBody />

          </section>
        </div>
      </div>
    </main>
  )
}
