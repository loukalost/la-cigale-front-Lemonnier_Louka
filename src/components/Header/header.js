/**
 * header.js – Navigation sticky + hamburger mobile
 * Référence Stitch : Section Navigation (home_desktop)
 */

export function initHeader() {
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const drawer = document.getElementById('header-drawer');

    if (!header) return;

    // ── Sticky scroll ──
    const onScroll = () => {
        header.classList.toggle('header--scrolled', window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // état initial

    // ── Hamburger mobile ──
    hamburger?.addEventListener('click', () => {
        const isOpen = header.classList.toggle('header--open');
        hamburger.setAttribute('aria-expanded', String(isOpen));
        drawer?.setAttribute('aria-hidden', String(!isOpen));
    });

    // ── Fermer le drawer sur lien cliqué ──
    drawer?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('header--open');
            hamburger?.setAttribute('aria-expanded', 'false');
            drawer.setAttribute('aria-hidden', 'true');
        });
    });

    // ── Fermer sur Escape ──
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && header.classList.contains('header--open')) {
            header.classList.remove('header--open');
            hamburger?.setAttribute('aria-expanded', 'false');
            drawer?.setAttribute('aria-hidden', 'true');
            hamburger?.focus();
        }
    });
}
