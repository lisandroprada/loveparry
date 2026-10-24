(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Las chapas se atornillan una vez al entrar
  const items = document.querySelectorAll('[data-reveal]');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    items.forEach((el) => io.observe(el));
  }

  // Barra de WhatsApp en celular: aparece cuando el botón principal sale de la pantalla
  const barra = document.getElementById('barra');
  const cta = document.getElementById('cta-principal');
  const final = document.getElementById('cta-final');
  if (barra && cta && 'IntersectionObserver' in window) {
    const visible = { cta: true, final: false };
    const sync = () => {
      const show = !visible.cta && !visible.final;
      barra.classList.toggle('visible', show);
      barra.setAttribute('aria-hidden', String(!show));
      barra.querySelector('a').tabIndex = show ? 0 : -1;
    };
    new IntersectionObserver(([e]) => { visible.cta = e.isIntersecting; sync(); }).observe(cta);
    if (final) new IntersectionObserver(([e]) => { visible.final = e.isIntersecting; sync(); }).observe(final);
  }
})();
