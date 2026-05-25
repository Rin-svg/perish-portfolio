// =====================================================
// CAS PORTFOLIO — PERISH GUIALAKONG DEMANOU
// Bilingual JS (FR / EN) + UI Logic
// =====================================================

// ══════════════════════════════════════
// 1. LANGUAGE SYSTEM
// ══════════════════════════════════════

const LANG_KEY = 'cas_lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'fr';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-fr]').forEach(el => {
    const val = lang === 'fr' ? el.getAttribute('data-fr') : el.getAttribute('data-en');
    if (val !== null) el.innerHTML = val;
  });

  document.querySelectorAll('[data-fr-placeholder]').forEach(el => {
    el.placeholder = lang === 'fr'
      ? el.getAttribute('data-fr-placeholder')
      : el.getAttribute('data-en-placeholder');
  });

  const toggles = document.querySelectorAll('.lang-toggle');
  toggles.forEach(btn => {
    btn.innerHTML = lang === 'fr'
      ? '<span class="lang-flag">🇬🇧</span> EN'
      : '<span class="lang-flag">🇫🇷</span> FR';
    btn.title = lang === 'fr' ? 'Switch to English' : 'Passer en français';
  });

  document.documentElement.setAttribute('lang', lang);
}

function toggleLanguage() {
  applyLanguage(currentLang === 'fr' ? 'en' : 'fr');
}

// ══════════════════════════════════════
// 2. INTERSECTION OBSERVER (fade-ins)
// ══════════════════════════════════════

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

// ══════════════════════════════════════
// 3. TAB SYSTEM
// ══════════════════════════════════════

function initTabs() {
  const tabBtns     = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const content = document.getElementById(target);
      if (content) {
        content.classList.add('active');
        content.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
      }
    });
  });
}

// ══════════════════════════════════════
// 4. ACTIVE NAV LINK
// ══════════════════════════════════════

function setActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ══════════════════════════════════════
// 5. LIGHTBOX
// ══════════════════════════════════════

function initLightbox() {
  const overlay = document.createElement('div');
  overlay.id    = 'lightbox';
  overlay.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:9998;
    display:none;align-items:center;justify-content:center;
    backdrop-filter:blur(10px);cursor:pointer;
  `;
  overlay.innerHTML = `
    <div style="max-width:90vw;max-height:90vh;position:relative;">
      <img id="lb-img" style="max-width:100%;max-height:90vh;border-radius:12px;display:none;">
      <video id="lb-vid" controls style="max-width:100%;max-height:90vh;border-radius:12px;display:none;"></video>
      <div id="lb-cap" style="text-align:center;margin-top:12px;color:#E8E4D9;font-size:0.9rem;"></div>
      <button id="lb-close" style="position:absolute;top:-40px;right:0;background:none;border:none;color:white;font-size:1.8rem;cursor:pointer;">✕</button>
    </div>
  `;
  document.body.appendChild(overlay);

  // Attach lightbox to all media-items with data-src
  document.querySelectorAll('.media-item[data-src]').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      const src  = item.dataset.src;
      const type = item.dataset.type || 'image';
      const cap  = item.dataset.caption || '';
      const lbImg = document.getElementById('lb-img');
      const lbVid = document.getElementById('lb-vid');
      lbImg.style.display = 'none';
      lbVid.style.display = 'none';
      if (type === 'video') { lbVid.src = src; lbVid.style.display = 'block'; }
      else                  { lbImg.src = src; lbImg.style.display = 'block'; }
      document.getElementById('lb-cap').textContent = cap;
      overlay.style.display = 'flex';
    });
  });

  overlay.addEventListener('click', e => {
    if (e.target === overlay || e.target.id === 'lb-close') {
      overlay.style.display = 'none';
      document.getElementById('lb-vid').src = '';
    }
  });
}

// ══════════════════════════════════════
// 6. SCROLL PROGRESS BAR
// ══════════════════════════════════════

function initScrollProgress() {
  const bar = document.createElement('div');
  bar.style.cssText = `
    position:fixed;top:0;left:0;height:2px;
    background:linear-gradient(90deg,#C9A84C,#4ECDC4);
    z-index:10001;transition:width 0.1s;width:0%;pointer-events:none;
  `;
  document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = pct + '%';
  });
}

// ══════════════════════════════════════
// 7. GANTT BAR ANIMATION (timeline page)
// ══════════════════════════════════════

function initGanttBars() {
  const bars   = document.querySelectorAll('.tb-bar');
  const widths = Array.from(bars).map(b => b.style.width);
  bars.forEach(b => { b.style.width = '0%'; });

  const barObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = Array.from(bars).indexOf(entry.target);
        setTimeout(() => { entry.target.style.width = widths[idx]; }, 100);
        barObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(b => barObs.observe(b));
}

// ══════════════════════════════════════
// 8. INIT
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', toggleLanguage);
  });
  applyLanguage(currentLang);
  initTabs();
  setActiveNav();
  initLightbox();
  initScrollProgress();
  initGanttBars();

  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.04}s`;
    fadeObserver.observe(el);
  });
});
