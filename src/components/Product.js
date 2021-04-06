import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchElement,
  selectSize,
  increaseQuantity,
  decreaseQuantity,
  defaultQuantity,
  sendingToCart
} from '../actions/actionCreators';

export default function Product({ match }) {
  const { element, quantity, loadingElement, elementError } = useSelector(state => state.serviceElement);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    fetchElement(dispatch, match.params.id);
  }, [dispatch, match.params.id]);


  // обработка ошибки

  if (elementError) {
    history.push("/errorloading");
    return (
      <>
        {console.log('Error with loading element!!!')}
      </>
    )
  }

  // конец обработки ошибки

  const handleSelectSize = (e, sizeId) => {
    e.preventDefault();
    dispatch(selectSize(sizeId));
  }

  const handleCounterIncrease = (e) => {
    e.preventDefault();
    dispatch(increaseQuantity());
  }

  const handleCounterDecrease = (e) => {
    e.preventDefault();
    dispatch(decreaseQuantity());
  }

  const handleSendingToCart = () => {
    dispatch(sendingToCart(
      element.id,
      element.title,
      element.sizes.find((s) => s.className.includes('selected')).size,
      quantity,
      element.price,
    ));
    dispatch(defaultQuantity());
    history.push("/cart");
  }

  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col" >
            <section className="catalog-item" key={element.id}>
              <h2 className="text-center">{element.title}</h2>
              <div className="row">
                <div className="col-5">
                  <img
                    onError={(event) => event.target.setAttribute("src", "https://elbel.by/image/cache/catalog/nastennye-bra-folder/0/oad-iblock-21a-21affe2dd1950db04594ed01f01a2fb0-400x400.jpg")}
                    src={element.images[0]}
                    className="img-fluid"
                    alt="" />
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
                      {element.sizes.find((s) => s.avalible) ?
                        element.sizes.filter((s) => s.avalible).map((s) =>
                          <span className={s.className} key={s.size} onClick={(e) => handleSelectSize(e, s.size)}>{s.size}</span>
                        )
                        : ' Извините, ни одного размера в наличии нет.'
                      }
                    </p>

                    {element.sizes.find((s) => s.avalible) ?
                      <>
                        <p>Количество:
                          <span className="btn-group btn-group-sm pl-2">
                            <button className="btn btn-secondary" onClick={(e) => handleCounterDecrease(e)}>-</button>
                            <span className="btn btn-outline-primary">{quantity}</span>
                            <button className="btn btn-secondary" onClick={(e) => handleCounterIncrease(e)}>+</button>
                          </span>
                        </p>
                        <button
                          className="btn btn-danger btn-block btn-lg"
                          onClick={() => handleSendingToCart()}
                          disabled={
                            element.sizes.find((s) => s.className.includes('selected')) ? false : true
                          }>В корзину</button>
                      </>
                      : null
                    }

                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {
        // обработка загрузки
        loadingElement ?
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
