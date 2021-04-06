import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, sendingOrder, changeField } from '../actions/actionCreators';

export default function Cart() {

  const { cartItems, fields } = useSelector(state => state.serviceSendingToCart);
  const { sendLoading, sendError } = useSelector(state => state.serviceSendingOrder);
  const dispatch = useDispatch();
  const history = useHistory();

  // обработка ошибки

  if (sendError) {
    history.push("/errorloading");
    return (
      <>
        {console.log('Error with sending order!!!')}
      </>
    )
  }

  // конец обработки ошибки

  function multiplication(a, b) {
    return a * b;
  }

  const handleDeleteItems = (e, id) => {
    e.preventDefault();
    dispatch(removeFromCart(id));
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeField(name, value));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    sendingOrder(
      dispatch,
      {
        phone: fields.phoneField,
        address: fields.addressField
      },
      cartItems.map(item => {
        return {
          id: item.id,
          price: item.price,
          count: item.quantity
        }
      })
    );
    history.push("/success");
  }

  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col">

            <section className="cart">
              <h2 className="text-center">Корзина</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название</th>
                    <th scope="col">Размер</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col">Итого</th>
                    <th scope="col">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) =>
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td><Link to={`/catalog/${item.id}`}>{item.name}</Link></td>
                      <td>{item.size}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                      <td>{multiplication(item.price, item.quantity)}</td>
                      <td><button
                        className="btn btn-outline-danger btn-sm"
                        onClick={(e) => handleDeleteItems(e, item.id)}>
                        Удалить
                    </button></td>
                    </tr>
                  )}
                  <tr>
                    <td colSpan="5" className="text-right">Общая стоимость</td>
                    <td>
                      {
                        cartItems.length > 0 ? cartItems.map(item => multiplication(item.price, item.quantity))
                          .reduce((sum, current) => sum + current) : null
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="order">
              <h2 className="text-center">Оформить заказ</h2>
              <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
                <form className="card-body" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input
                      className="form-control"
                      id="phone"
                      name='phoneField'
                      onChange={handleChange}
                      value={fields.phoneField}
                      required="required"
                      placeholder="Ваш телефон" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Адрес доставки</label>
                    <input
                      className="form-control"
                      id="address"
                      name='addressField'
                      onChange={handleChange}
                      value={fields.addressField}
                      required="required"
                      placeholder="Адрес доставки" />
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      required="required"
                      id="agreement" />
                    <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                  </div>
                  <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                </form>
              </div>
            </section>

          </div>
        </div>
      </main>
      {
        // обработка загрузки
        sendLoading ?
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
