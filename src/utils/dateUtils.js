/**
 * Utilidades para manejo de fechas y montos en el ejercicio de ATM (Colas)
 */

/**
 * Genera una fecha y hora de llegada aleatoria asignada por el sistema.
 * Simula llegadas en una ventana de tiempo reciente (entre 5 y 90 minutos atrás).
 */
export function generateRandomArrivalDate(offsetMinutesRange = { min: 5, max: 90 }) {
  const now = new Date();
  const randomMinutesAgo =
    Math.floor(
      Math.random() * (offsetMinutesRange.max - offsetMinutesRange.min + 1)
    ) + offsetMinutesRange.min;
  const arrival = new Date(now.getTime() - randomMinutesAgo * 60 * 1000);
  return arrival.toISOString();
}

/**
 * Formatea una fecha ISO o Date en formato legible en español (Colombia).
 */
export function formatDateTime(dateInput) {
  if (!dateInput) return "Sin fecha";
  const date = new Date(dateInput);
  return date.toLocaleString("es-CO", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

/**
 * Formatea un valor numérico a moneda (COP / Pesos).
 */
export function formatCurrency(amount) {
  const num = Number(amount) || 0;
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(num);
}
