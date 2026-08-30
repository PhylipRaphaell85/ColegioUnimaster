export const WHATSAPP_NUMBER = "5581987117084";
export const WHATSAPP_DISPLAY = "(81) 98711-7084";
export const WHATSAPP_MESSAGE =
  "Olá, gostaria de mais informações sobre as matrículas.";

export function whatsappUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
