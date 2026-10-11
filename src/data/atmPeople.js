import { generateRandomArrivalDate } from "../utils/dateUtils";

/**
 * Datos iniciales simulados (Mock Data) para la cola del Cajero Automático (ATM).
 * Cada persona cuenta con:
 * - id: Identificador único.
 * - name: Nombre del cliente.
 * - withdrawalAmount: Monto que desea retirar en el cajero.
 * - arrivalDate: Fecha y hora de llegada asignada por el sistema.
 */

// Generamos fechas escalonadas para simular llegadas cronológicas reales
const now = Date.now();
const minutes = (m) => m * 60 * 1000;

export const mockAtmPeople = [
  {
    id: "p-1",
    name: "Carlos Mario Gómez",
    withdrawalAmount: 350000,
    arrivalDate: new Date(now - minutes(45)).toISOString(),
  },
  {
    id: "p-2",
    name: "Valentina Ríos Ospina",
    withdrawalAmount: 180000,
    arrivalDate: new Date(now - minutes(32)).toISOString(),
  },
  {
    id: "p-3",
    name: "Andrés Felipe Castro",
    withdrawalAmount: 500000,
    arrivalDate: new Date(now - minutes(20)).toISOString(),
  },
  {
    id: "p-4",
    name: "Camila Restrepo Morales",
    withdrawalAmount: 100000,
    arrivalDate: new Date(now - minutes(12)).toISOString(),
  },
  {
    id: "p-5",
    name: "Juan David Salazar",
    withdrawalAmount: 250000,
    arrivalDate: new Date(now - minutes(4)).toISOString(),
  },
];

export default mockAtmPeople;
