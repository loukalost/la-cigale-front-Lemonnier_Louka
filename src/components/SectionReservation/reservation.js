/**
 * reservation.js – Validation basique du formulaire de réservation
 */

export function initReservation() {
    const form = document.getElementById('reservation-form');
    if (!form) return;

    // Définir la date minimale à aujourd'hui
    const dateInput = document.getElementById('r-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Succès (stub — à connecter à un vrai backend ou widget tiers)
        const btn = form.querySelector('[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = '✓ Demande envoyée !';
        btn.disabled = true;
        btn.style.background = '#22c55e';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.background = '';
            form.reset();
            if (dateInput) {
                const today = new Date().toISOString().split('T')[0];
                dateInput.value = today;
            }
        }, 4000);
    });
}
