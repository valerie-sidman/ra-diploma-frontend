import React from 'react';
import { Link } from 'react-router-dom';
import SafeImage from './SafeImage';

export default function CatalogElement({ catalogElements }) {
  return (
    <div className="row">
      {catalogElements.length === 0 ?
        <p>Извините, по данному запросу товаров не найдено</p> : null}
      {catalogElements.map(element =>
        <div className="col-4" key={element.id}>
          <div className="card catalog-item-card">

            <SafeImage
              src={element.images[0]}
              className="card-img-top img-fluid"
              alt={element.title}
            />
            
            <div className="card-body">
              <p className="card-text">{element.title}</p>
              <p className="card-text">{element.price} руб.</p>
              <Link to={`/catalog/${element.id}`} className="btn btn-outline-primary">Заказать</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}