/**
 * main.js – Point d'entrée JavaScript
 * La Cigale Homepage — Logique interactive
 * Référence : PROJECT_PLAN.md + ARCHITECTURE.md + UI_SPECS.md
 */

import { initHeader } from './components/Header/header.js';
import { initHero } from './components/Hero/hero.js';
import { initChatbot } from './components/SectionServeurIA/chatbot.js';
import { initReservation } from './components/SectionReservation/reservation.js';
import { initReveal } from './utils/reveal.js';
import { initSmoothScroll } from './utils/smooth-scroll.js';

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initHero();
    initChatbot();
    initReservation();
    initReveal();
    initSmoothScroll();
});
