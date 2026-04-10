/**
 * config.js – Configuration centralisée
 * Charge les variables d'environnement (depuis import.meta.env en mode Vite)
 */

export const config = {
  app: {
    name: import.meta.env.VITE_APP_NAME || 'La Cigale',
    environment: import.meta.env.VITE_APP_ENVIRONMENT || 'development',
    url: import.meta.env.VITE_APP_URL || 'http://localhost:5173',
  },
  contact: {
    phone: import.meta.env.VITE_RESTAURANT_PHONE || '02 51 84 94 94',
    email: import.meta.env.VITE_RESTAURANT_EMAIL || 'contact@lacigale-brewpub.fr',
  },
  chatbot: {
    botResponse: import.meta.env.VITE_CHATBOT_BOT_RESPONSE || 'Je note votre message. Pour une réservation, vous pouvez remplir notre formulaire ou nous joindre.',
    messageDelay: parseInt(import.meta.env.VITE_CHATBOT_MESSAGE_DELAY || '900'),
    initialMessage: import.meta.env.VITE_CHATBOT_INITIAL_MESSAGE || 'Bonjour, je suis votre Maître d\'Hôtel digital. Comment puis-je vous aider ?',
  },
  reservation: {
    successMessage: import.meta.env.VITE_RESERVATION_SUCCESS_MESSAGE || '✓ Demande envoyée !',
    successDelay: parseInt(import.meta.env.VITE_RESERVATION_SUCCESS_DELAY || '4000'),
    successColor: import.meta.env.VITE_RESERVATION_SUCCESS_COLOR || '#22c55e',
  },
};
