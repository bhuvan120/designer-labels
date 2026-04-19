// Add Niharika's WhatsApp number here in international format, without +, spaces, or dashes.
// Example for India: '919876543210'
const WHATSAPP_NUMBER = '919247585357'

export function getWhatsAppUrl(message) {
  const encodedMessage = encodeURIComponent(message)
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`
}

export function getProductOrderMessage(design) {
  return `Hi Niharika, I want to place an order for ${design.title}. Please share price, availability, customization options, and delivery details.`
}

export function getCustomOrderMessage() {
  return 'Hi Niharika, I want to place an order or request a custom fashion design. Please share the next steps.'
}
