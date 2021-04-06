import React from 'react';
import { Link } from 'react-router-dom';

export default function CatalogElement({ catalogElements }) {
  return (
    <div className="row">
      {catalogElements.map(element =>
        <div className="col-4" key={element.id}>
          <div className="card catalog-item-card">
            <img
              onError={(event) => event.target.setAttribute("src", "https://elbel.by/image/cache/catalog/nastennye-bra-folder/0/oad-iblock-21a-21affe2dd1950db04594ed01f01a2fb0-400x400.jpg")}
              src={element.images[0]}
              className="card-img-top img-fluid"
              alt={element.title} />
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