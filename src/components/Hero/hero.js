/**
 * hero.js – Chargement image Hero (légère animation)
 */

export function initHero() {
    const heroBg = document.querySelector('.hero__bg');
    if (!heroBg) return;

    // Déclenche la transition d'échelle une fois la page chargée
    window.addEventListener('load', () => {
        heroBg.classList.add('loaded');
    });
}
