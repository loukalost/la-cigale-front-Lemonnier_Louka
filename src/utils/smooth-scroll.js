/**
 * smooth-scroll.js – Navigation fluide vers les ancres
 */

export function initSmoothScroll() {
    const HEADER_HEIGHT = 72;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}
