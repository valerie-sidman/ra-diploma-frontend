import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHits } from '../actions/actionCreators';
import SafeImage from './SafeImage';

export default function Hits() {
  const { hits, loading, error } = useSelector(state => state.serviceHits);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    fetchHits(dispatch);
  }, [dispatch]);


  // обработка ошибки

  if (error) {
    history.push("/errorloading");
    return (
      <>
        {console.log('Error with loading hits!!!')}
      </>
    )
  }

  // конец обработки ошибки

  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col">
            <section className="top-sales">
              <h2 className="text-center">Хиты продаж!</h2>

              <div className="row">
                {hits.map(o =>
                  <div className="col-4" key={o.id}>
                    <div className="card">

                      <SafeImage
                        src={o.images[0]}
                        className="card-img-top img-fluid"
                        alt={o.title}
                      />

                      <div className="card-body">
                        <p className="card-text">{o.title}</p>
                        <p className="card-text">{o.price} руб.</p>
                        <Link to={`/catalog/${o.id}`} className="btn btn-outline-primary">Заказать</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </section>
          </div>
        </div>
      </main>

      {
        // обработка загрузки
        loading ?
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
          </main> : null
        // конец обработки загрузки
      }
    </>
  )
}
