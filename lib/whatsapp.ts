/**
 * Centralização do contato.
 *
 * Hoje todos os CTAs levam ao WhatsApp.
 * Futuramente poderemos redirecionar para `/agendamento`
 * alterando apenas este arquivo.
 */

export const WHATSAPP_NUMBER = "5569984928759";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Keli! Conheci seu trabalho pelo site e gostaria de saber mais sobre o acompanhamento nutricional para fertilidade.";

export const WHATSAPP_DISPLAY = "+55 69 98492-8759";

export function whatsappLink(
  message: string = WHATSAPP_DEFAULT_MESSAGE
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}