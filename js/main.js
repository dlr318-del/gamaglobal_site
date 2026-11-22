(function () {
  function initBurger() {
    const b = document.getElementById('burger');
    const d = document.getElementById('drawer');
    if (!b || !d) return;
    b.addEventListener('click', function () {
      const o = b.classList.toggle('is-open');
      d.classList.toggle('is-open', o);
      b.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
    d.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        b.classList.remove('is-open');
        d.classList.remove('is-open');
        b.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initCarousel() {
    const slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
    const buttons = Array.prototype.slice.call(document.querySelectorAll('.slide-btn'));
    if (!slides.length || !buttons.length) return;

    let activeIndex = 0, timer = null;
    const DURATION = 8000;

    function setActive(index) {
      activeIndex = index;
      slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
      buttons.forEach((b, i) => {
        b.classList.toggle('is-active', i === index);
        if (i === index) b.setAttribute('aria-current', 'true');
        else b.removeAttribute('aria-current');
      });
      restart();
    }
    function next() { setActive((activeIndex + 1) % slides.length); }
    function restart() {
      if (timer) clearInterval(timer);
      timer = setInterval(next, DURATION);
      buttons.forEach((b, i) => {
        const fill = b.querySelector('.slide-fill');
        if (!fill) return;
        fill.style.animation = 'none';
        void fill.offsetWidth;
        fill.style.animation = (i === activeIndex)
          ? 'fill ' + (DURATION / 1000) + 's linear forwards'
          : 'none';
      });
    }
    buttons.forEach((btn, i) => btn.addEventListener('click', () => setActive(i)));
    restart();
  }

  function initForms() {
    document.querySelectorAll('form[data-demo-form]').forEach(function (f) {
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        const msg = f.querySelector('.form-success');
        if (msg) {
          msg.hidden = false;
          msg.textContent = 'Спасибо! Это демонстрационная форма прототипа: подключите адрес получателя или CRM, чтобы заявки действительно отправлялись.';
        }
        f.reset();
      });
    });
  }

  function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    function update() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    }
    document.addEventListener('scroll', update, { passive: true });
    update();
  }

  function boot() {
    initBurger();
    initCarousel();
    initForms();
    initScrollProgress();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // main.js грузится с defer — меню уже вставлено menu.js.
  // Но на всякий случай переинициализируем по событию.
  document.addEventListener('menu:ready', boot);
})();