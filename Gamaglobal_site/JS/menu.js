/* ============================================================
   ЕДИНСТВЕННОЕ МЕСТО, ГДЕ ОПИСАНЫ ВЕРХНЕЕ МЕНЮ И ПОДВАЛ.
   Меняете здесь — обновляется на всех страницах.
   Работает без сервера (обычный <script src="js/menu.js">).
   ============================================================ */

/* ---------- ВЕРХНЕЕ МЕНЮ ---------- */
function renderHeader() {
  return `
  <div id="scroll-progress"><div></div></div>

  <header class="header inner-header">
    <div class="header-inner">
      <a class="logo" href="index.html" aria-label="GAMA — главная">
        <svg viewBox="0 0 160 36" aria-hidden="true">
          <text x="0" y="27" font-family="'Century Gothic','CenturyGothic','URW Gothic','Questrial','Futura','Avenir Next',sans-serif" font-size="31" font-weight="800" letter-spacing="3">GAMA</text>
        </svg>
      </a>

      <nav class="mainnav" aria-label="Основная навигация">
        <ul>
          <li><a class="mainnav-item" href="index.html">Главная</a></li>
          <li><a class="mainnav-item" href="time-machine.html">Машина времени</a></li>

          <li class="nav-group">
            <button class="mainnav-item" type="button">Возможности</button>
            <div class="mega">
              <a href="portfolio.html">Управление портфелем →</a>
              <a href="risk.html">Риски и эффективность →</a>
              <a href="scenario.html">Сценарный прогноз →</a>
              <a href="data.html">Данные и интеграции →</a>
              <a href="services.html">Услуги по управлению данными →</a>
              <a href="implementation.html">Внедрение и сопровождение →</a>
              <a href="methodology.html">Материалы</a>
              <a href="report.html">Отчёт →</a>
            </div>
          </li>

          <li class="nav-group">
            <button class="mainnav-item" type="button">Отраслевые решения</button>
            <div class="mega">
              <a href="industries.html#npf">НПФ →</a>
              <a href="industries.html#banks">Банки →</a>
              <a href="industries.html#managers">Управляющие компании →</a>
              <a href="industries.html#insurance">Страховые компании →</a>
              <a href="industries.html#family">Семейные офисы →</a>
              <a href="industries.html#institutional">Институциональные инвесторы →</a>
            </div>
          </li>

          <li class="nav-group">
            <button class="mainnav-item" type="button">Продукты</button>
            <div class="mega">
              <a href="products.html">Все продукты и инструменты →</a>
              <a href="products.html#optimizer"><span class="gama">GAMA</span> Управление портфелем →</a>
              <a href="products.html#agent"><span class="gama">GAMA</span> Агент →</a>
            </div>
          </li>

          <li class="nav-group">
            <button class="mainnav-item" type="button">О компании</button>
            <div class="mega">
              <a href="about.html">О компании →</a>
              <a href="contacts.html">Контакты →</a>
            </div>
          </li>
        </ul>
      </nav>

      <a class="btn-outline" href="contacts.html">
        Запросить демонстрацию
        <svg viewBox="0 0 24 24"><path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
      </a>

      <button class="burger" id="burger" aria-label="Открыть меню" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <nav class="drawer" id="drawer" aria-label="Мобильное меню">
    <a href="index.html">Главная</a>
    <a href="time-machine.html">Машина времени <span class="gama">GAMA</span></a>

    <span class="drawer-label">Возможности</span>
    <a href="portfolio.html">Управление портфелем</a>
    <a href="risk.html">Риски и эффективность</a>
    <a href="scenario.html">Сценарный прогноз</a>
    <a href="data.html">Данные и интеграции</a>
    <a href="services.html">Услуги по управлению данными</a>
    <a href="implementation.html">Внедрение и сопровождение</a>

    <span class="drawer-label">Отраслевые решения</span>
    <a href="industries.html#npf">НПФ</a>
    <a href="industries.html#banks">Банки</a>
    <a href="industries.html#managers">Управляющие компании</a>
    <a href="industries.html#insurance">Страховые компании</a>
    <a href="industries.html#family">Семейные офисы</a>
    <a href="industries.html#institutional">Институциональные инвесторы</a>

    <span class="drawer-label">О <span class="gama">GAMA</span></span>
    <a href="products.html">Продукты</a>
    <a href="about.html">О компании</a>
    <a href="contacts.html">Контакты / демонстрация</a>
  </nav>
  `;
}

/* ---------- ПОДВАЛ ---------- */
function renderFooter() {
  return `
  <footer>
    <div class="footer-main">
      <div>
        <div class="footer-brand"><span class="gama">GAMA</span></div>
        <p>Программный комплекс для управления, анализа и контроля инвестиционных портфелей.</p>
      </div>

      <div class="footer-col">
        <strong>Возможности</strong>
        <a href="portfolio.html">Управление портфелем</a>
        <a href="risk.html">Риски и эффективность</a>
        <a href="scenario.html">Сценарный прогноз</a>
        <a href="data.html">Данные и интеграции</a>
        <a href="services.html">Услуги по управлению данными</a>
      </div>

      <div class="footer-col">
        <strong>Для кого</strong>
        <a href="industries.html#npf">НПФ</a>
        <a href="industries.html#banks">Банки</a>
        <a href="industries.html#managers">Управляющие компании</a>
        <a href="industries.html#family">Семейные офисы</a>
      </div>

      <div class="footer-col">
        <strong>Компания</strong>
        <a href="products.html">Продукты</a>
        <a href="implementation.html">Внедрение</a>
        <a href="about.html">О компании</a>
        <a href="contacts.html">Контакты</a>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© <span class="gama">GAMA</span> · Корпоративный сайт</span>
      <span>Сведения о функциях и интеграциях уточняются для конкретной конфигурации.</span>
    </div>
  </footer>
  `;
}

/* ---------- ВСТАВКА В СТРАНИЦУ ---------- */
(function () {
  var headerSlot = document.getElementById('site-header');
  if (headerSlot) headerSlot.innerHTML = renderHeader();

  var footerSlot = document.getElementById('site-footer');
  if (footerSlot) footerSlot.innerHTML = renderFooter();

  // сообщаем main.js, что меню готово
  document.dispatchEvent(new Event('menu:ready'));
})();