import React from 'react';
import CatalogBody from './CatalogBody';

export default function CatalogPreview() {

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            <CatalogBody />

          </section>
        </div>
      </div>
    </main>
  )
}
