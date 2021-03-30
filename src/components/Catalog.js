import React from 'react';
import CatalogBody from './CatalogBody';

export default function Catalog() {

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            <form className="catalog-search-form form-inline">
              <input className="form-control" placeholder="Поиск" />
            </form>

            <CatalogBody />

          </section>
        </div>
      </div>
    </main>
  )
}
