

export interface Turno {
  id: number;
  nomeReparto: string;
  operatore: string;
  tipo: "Mattina" | "Pomeriggio" | "Notte";
  data: Date
}