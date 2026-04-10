/**
 * chatbot.js – Interface Maître d'Hôtel digital
 * Message Stitch : "Bonjour, je suis votre Maître d'Hôtel digital..."
 */

import { config } from '../../config.js';

export function initChatbot() {
    const trigger = document.getElementById('chatbot-trigger');
    const window_ = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('chatbot-close');
    const input = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send');
    const messages = document.getElementById('chatbot-messages');

    if (!trigger || !window_) return;

    // ── Ouvrir / fermer ──
    const toggle = (open) => {
        window_.classList.toggle('open', open);
        window_.setAttribute('aria-hidden', String(!open));
        trigger.setAttribute('aria-expanded', String(open));
        if (open) input?.focus();
    };

    trigger.addEventListener('click', () => toggle(!window_.classList.contains('open')));
    closeBtn?.addEventListener('click', () => toggle(false));

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && window_.classList.contains('open')) toggle(false);
    });

    // ── Envoyer un message ──
    const sendMessage = () => {
        const text = input?.value?.trim();
        if (!text) return;

        appendMessage(text, 'user');
        input.value = '';

        // Réponse simulée
        setTimeout(() => {
            appendMessage(
                config.chatbot.botResponse,
                'bot'
            );
        }, config.chatbot.messageDelay);
    };

    sendBtn?.addEventListener('click', sendMessage);
    input?.addEventListener('keydown', e => {
        if (e.key === 'Enter') sendMessage();
    });

    // ── Ajouter un message dans la liste ──
    function appendMessage(text, type) {
        const div = document.createElement('div');
        div.className = `chatbot__message chatbot__message--${type}`;
        div.innerHTML = `<p>${text}</p>`;
        messages?.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }
}
