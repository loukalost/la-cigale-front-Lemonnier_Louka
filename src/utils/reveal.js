/**
 * reveal.js – Animations d'apparition au scroll (Intersection Observer)
 */

export function initReveal() {
    const elements = document.querySelectorAll(
        '.section-patrimoine__visual, .section-patrimoine__content, .card, .section-reservation__info, .section-reservation__form'
    );

    if (!elements.length || !('IntersectionObserver' in window)) return;

    elements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    elements.forEach(el => observer.observe(el));
}
