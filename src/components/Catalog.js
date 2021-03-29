import React from 'react';

export default function Catalog() {
  return (
    <main class="container">
      <div class="row">
        <div class="col">
          <section class="catalog">
            <h2 class="text-center">Каталог</h2>

            <form class="catalog-search-form form-inline">
              <input class="form-control" placeholder="Поиск" />
            </form>

            <ul class="catalog-categories nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" href="/#">Все</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">Женская обувь</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">Мужская обувь</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">Обувь унисекс</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">Детская обувь</a>
              </li>
            </ul>

            <div class="row">
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src="https://cdn-images.farfetch-contents.com/12/93/06/52/12930652_13567910_1000.jpg"
                    class="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                  <div class="card-body">
                    <p class="card-text">Босоножки 'MYER'</p>
                    <p class="card-text">34 000 руб.</p>
                    <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src="https://cdn-images.farfetch-contents.com/12/94/66/72/12946672_13518465_1000.jpg"
                    class="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                  <div class="card-body">
                    <p class="card-text">Босоножки 'Keira'</p>
                    <p class="card-text">7 600 руб.</p>
                    <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src="https://cdn-images.farfetch-contents.com/12/99/04/32/12990432_13705715_1000.jpg"
                    class="card-img-top img-fluid" alt="Супергеройские кеды" />
                  <div class="card-body">
                    <p class="card-text">Супергеройские кеды</p>
                    <p class="card-text">1 400 руб.</p>
                    <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src="https://cdn-images.farfetch-contents.com/12/93/06/52/12930652_13567910_1000.jpg"
                    class="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                  <div class="card-body">
                    <p class="card-text">Босоножки 'MYER'</p>
                    <p class="card-text">34 000 руб.</p>
                    <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src="https://cdn-images.farfetch-contents.com/12/94/66/72/12946672_13518465_1000.jpg"
                    class="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                  <div class="card-body">
                    <p class="card-text">Босоножки 'Keira'</p>
                    <p class="card-text">7 600 руб.</p>
                    <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src="https://cdn-images.farfetch-contents.com/12/99/04/32/12990432_13705715_1000.jpg"
                    class="card-img-top img-fluid" alt="Супергеройские кеды" />
                  <div class="card-body">
                    <p class="card-text">Супергеройские кеды</p>
                    <p class="card-text">1 400 руб.</p>
                    <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center">
              <button class="btn btn-outline-primary">Загрузить ещё</button>
            </div>

          </section>
        </div>
      </div>
    </main>
  )
}
