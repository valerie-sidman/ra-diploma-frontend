import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHits } from '../actions/actionCreators';

export default function Hits() {
  const { hits, loading, error } = useSelector(state => state.serviceHits);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchHits(dispatch);
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <main className="container">
          <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="preloader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
        </main>
      </>
    )
  }

  if (error) {
    return (
      <>
        {console.log('Error with loading hits!!!')}
      </>
    )
  }

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>

            <div className="row">
              {hits.map(o =>
                <div className="col-4" key={o.id}>
                  <div className="card">
                    <img src={o.images[0] || o.images[1]}
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

          </section>
        </div>
      </div>
    </main>
  )
}
