/* The Persistence Problem — Main JS */
(function(){
  'use strict';

  /* Header raise */
  const hdr = document.getElementById('hdr');
  if (hdr) {
    window.addEventListener('scroll', () => {
      hdr.classList.toggle('up', window.scrollY > 20);
    }, { passive: true });
  }

  /* Scroll reveal */
  const revealEls = document.querySelectorAll('.sr, .sr-l, .sr-r');
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  }

  /* Chapter card micro-tilt */
  document.querySelectorAll('.ch.live').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `translateY(-2px) rotateX(${-y*1.5}deg) rotateY(${x*1.5}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  /* Parallax hero visual */
  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual) {
    window.addEventListener('scroll', () => {
      heroVisual.style.transform = `translateY(${window.scrollY * 0.08}px)`;
    }, { passive: true });
  }

  /* Smooth scroll for anchor links */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
