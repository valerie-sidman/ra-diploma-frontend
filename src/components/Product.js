import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchElement, selectSize } from '../actions/actionCreators';

export default function Product({ match }) {
  const { element, loadingElement, elementError } = useSelector(state => state.serviceElement);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchElement(dispatch, match.params.id);
  }, [dispatch, match.params.id]);

  if (loadingElement) {
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

  if (elementError) {
    return (
      <>
        {console.log('Error with loading element!!!')}
      </>
    )
  }

  // const handleSelectSize = (e, elementId) => {
  //   e.preventDefault();
  //   dispatch(selectSize(elementId));
  // }

  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col" >
            <section className="catalog-item" key={element.id}>
              <h2 className="text-center">{element.title}</h2>
              <div className="row">
                <div className="col-5">
                  <img src={element.images[0]} className="img-fluid" alt="" />
                </div>
                <div className="col-7">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Артикул</td>
                        <td>{element.sku}</td>
                      </tr>
                      <tr>
                        <td>Производитель</td>
                        <td>{element.manufacturer}</td>
                      </tr>
                      <tr>
                        <td>Цвет</td>
                        <td>{element.color}</td>
                      </tr>
                      <tr>
                        <td>Материалы</td>
                        <td>{element.material}</td>
                      </tr>
                      <tr>
                        <td>Сезон</td>
                        <td>{element.season}</td>
                      </tr>
                      <tr>
                        <td>Повод</td>
                        <td>{element.reason}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-center">
                    <p>Размеры в наличии:
                      {element.sizes.map((s) => s.avalible ?
                      <span className="catalog-item-size">{s.size}</span> : null
                    )}
                    </p>
                    <p>Количество: <span className="btn-group btn-group-sm pl-2">
                      <button className="btn btn-secondary">-</button>
                      <span className="btn btn-outline-primary">1</span>
                      <button className="btn btn-secondary">+</button>
                    </span>
                    </p>
                  </div>
                  <button className="btn btn-danger btn-block btn-lg">В корзину</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )

}
