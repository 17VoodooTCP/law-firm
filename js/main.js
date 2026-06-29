/* ============================================================
   CHRISTOPHER R. BRIDGE & CO. — MAIN JAVASCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── NAVIGATION ─── */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (navToggle && navLinks) {
    function closeNav() {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      document.body.style.overflow = '';
    }
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
      navToggle.querySelectorAll('span')[0].style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
      navToggle.querySelectorAll('span')[1].style.opacity  = open ? '0' : '1';
      navToggle.querySelectorAll('span')[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
      document.body.style.overflow = open ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
    document.addEventListener('click', e => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !navToggle.contains(e.target)) closeNav();
    });
  }

  /* ─── HERO CAROUSEL ─── */
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots   = document.querySelectorAll('.carousel-dot');
  let currentSlide = 0;
  let heroTimer;

  function showSlide(n) {
    heroSlides.forEach((s, i) => s.classList.toggle('active', i === n));
    heroDots.forEach((d, i) => d.classList.toggle('active', i === n));
    currentSlide = n;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % heroSlides.length);
  }

  if (heroSlides.length) {
    showSlide(0);
    heroTimer = setInterval(nextSlide, 5000);

    heroDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(heroTimer);
        showSlide(i);
        heroTimer = setInterval(nextSlide, 5000);
      });
    });

    // Pause on hover
    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', () => clearInterval(heroTimer));
      carousel.addEventListener('mouseleave', () => { heroTimer = setInterval(nextSlide, 5000); });
    }
  }

  /* ─── SCROLL-REVEAL ─── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => revealObs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ─── STATISTICS COUNTER ─── */
  const statNums = document.querySelectorAll('.stat-num');

  function animateCounter(el) {
    const target  = parseInt(el.dataset.target, 10);
    const suffix  = el.dataset.suffix || '';
    const duration = 2000;
    const start    = performance.now();
    const easeOut  = t => 1 - Math.pow(1 - t, 3);

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value    = Math.floor(easeOut(progress) * target);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  if (statNums.length && 'IntersectionObserver' in window) {
    const statsObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          statsObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(el => statsObs.observe(el));
  }

  /* ─── TESTIMONIALS SLIDER ─── */
  const testimonialTrack = document.querySelector('.testimonials-track');
  const testimonialDots  = document.querySelectorAll('.t-dot');
  const prevBtn = document.getElementById('tPrev');
  const nextBtn = document.getElementById('tNext');
  let currentT = 0;
  let tTimer;

  function showTestimonial(n) {
    const items = testimonialTrack?.querySelectorAll('.testimonial-item');
    if (!items) return;
    n = (n + items.length) % items.length;
    testimonialTrack.style.transform = `translateX(-${n * 100}%)`;
    testimonialDots.forEach((d, i) => d.classList.toggle('active', i === n));
    currentT = n;
  }

  if (testimonialTrack) {
    tTimer = setInterval(() => showTestimonial(currentT + 1), 6000);
    if (prevBtn) prevBtn.addEventListener('click', () => { clearInterval(tTimer); showTestimonial(currentT - 1); tTimer = setInterval(() => showTestimonial(currentT + 1), 6000); });
    if (nextBtn) nextBtn.addEventListener('click', () => { clearInterval(tTimer); showTestimonial(currentT + 1); tTimer = setInterval(() => showTestimonial(currentT + 1), 6000); });
    testimonialDots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(tTimer); showTestimonial(i); tTimer = setInterval(() => showTestimonial(currentT + 1), 6000); }));
  }

  /* ─── CONTACT FLIP CARD ─── */
  const flipCard = document.getElementById('contactFlipCard');
  if (flipCard) {
    flipCard.addEventListener('click', () => flipCard.classList.toggle('flipped'));
    flipCard.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') flipCard.classList.toggle('flipped');
    });
    flipCard.setAttribute('tabindex', '0');
    flipCard.setAttribute('role', 'button');
    flipCard.setAttribute('aria-label', 'Click to reveal contact information');
  }

  /* ─── SCROLL TO TOP ─── */
  const scrollToTop = document.getElementById('scrollTop');
  if (scrollToTop) {
    window.addEventListener('scroll', () => {
      scrollToTop.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    scrollToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ─── ACTIVE NAV LINK ─── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html') || (page === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ─── SMOOTH SCROLL for anchor links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.getElementById(a.getAttribute('href').slice(1));
      if (target) {
        e.preventDefault();
        const offset = 90;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  /* ─── RENDER functions (used by pages that need dynamic data) ─── */
  window.BridgeLaw = { renderAttorneys, renderTestimonials, renderNews, renderStats, renderPracticeAreas, renderLawyerBand };

  function renderAttorneys(container, attorneys) {
    if (!container || !attorneys) return;
    container.innerHTML = attorneys.map(a => `
      <div class="attorney-card reveal">
        <div class="attorney-photo">
          <img src="${a.image}" alt="${a.name}" loading="lazy">
          <div class="attorney-photo-overlay">
            <p class="attorney-overlay-text">${a.bio}</p>
          </div>
        </div>
        <div class="attorney-info">
          <div class="name">${a.name}</div>
          <div class="title">${a.title}</div>
          <div class="area"><i class="fa-solid fa-gavel"></i> ${a.area}</div>
        </div>
      </div>
    `).join('');
    // Re-observe new elements
    triggerReveal(container.querySelectorAll('.reveal'));
  }

  function renderTestimonials(track, dotsContainer, data) {
    if (!track || !data) return;
    track.innerHTML = data.map(t => `
      <div class="testimonial-item">
        <div class="testimonial-card">
          <div class="testimonial-quote">"</div>
          <p class="testimonial-text">${t.text}</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">${t.name.charAt(0)}</div>
            <div class="testimonial-author-info">
              <div class="name">${t.name}</div>
              <div class="title-role">${t.title}</div>
            </div>
            <div class="testimonial-stars">${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}</div>
          </div>
        </div>
      </div>
    `).join('');

    if (dotsContainer) {
      dotsContainer.innerHTML = data.map((_, i) => `<div class="t-dot${i===0?' active':''}" data-i="${i}"></div>`).join('');
      dotsContainer.querySelectorAll('.t-dot').forEach((d, i) => {
        d.addEventListener('click', () => { clearInterval(tTimer); showTestimonial(i); tTimer = setInterval(() => showTestimonial(currentT + 1), 6000); });
      });
    }
  }

  function renderNews(container, articles) {
    if (!container || !articles) return;
    const imgs = [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80'
    ];
    container.innerHTML = articles.map((n, i) => `
      <div class="news-card reveal">
        <div class="news-card-img">
          <img src="${imgs[i % imgs.length]}" alt="${n.title}" loading="lazy">
          <span class="news-category">${n.category}</span>
        </div>
        <div class="news-card-body">
          <div class="news-date"><i class="fa-regular fa-calendar"></i> ${n.date}</div>
          <h3>${n.title}</h3>
          <p>${n.excerpt}</p>
          <a href="news.html" class="news-link">Read More <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    `).join('');
    triggerReveal(container.querySelectorAll('.reveal'));
  }

  function renderStats(grid, stats) {
    if (!grid || !stats) return;
    grid.innerHTML = stats.map(s => `
      <div class="stat-item">
        <div class="stat-number">
          <span class="stat-num" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</span>
        </div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');
    // Re-observe new stat numbers
    grid.querySelectorAll('.stat-num').forEach(el => {
      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); obs.unobserve(e.target); } });
        }, { threshold: 0.5 });
        obs.observe(el);
      }
    });
  }

  function renderPracticeAreas(container, areas) {
    if (!container || !areas) return;
    container.innerHTML = areas.map(p => `
      <a href="pages/practice-${p.id}.html" class="practice-card reveal">
        <div class="practice-icon"><i class="fa-solid ${p.icon}"></i></div>
        <h3>${p.title}</h3>
        <p>${p.short}</p>
        <span class="learn-more">Learn More <i class="fa-solid fa-arrow-right"></i></span>
      </a>
    `).join('');
    triggerReveal(container.querySelectorAll('.reveal'));
  }

  function renderLawyerBand(attorneys) {
    const track = document.querySelector('.lawyer-track');
    if (!track || !attorneys) return;
    // Duplicate for infinite scroll
    const cards = attorneys.map(a => `
      <div class="lawyer-card">
        <img src="${a.image}" alt="${a.name}" loading="lazy">
        <div class="lawyer-card-info">
          <div class="name">${a.name}</div>
          <div class="role">${a.title.split(' ').slice(-2).join(' ')}</div>
        </div>
      </div>
    `).join('');
    track.innerHTML = cards + cards; // duplicate for seamless loop
  }

  function triggerReveal(els) {
    if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('visible')); return; }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
  }

});
