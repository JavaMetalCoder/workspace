export interface Stanza {
    id: number;
    tipologia: tipologia;
    descrizione: string;
    prezzo: number;
}

export type tipologia = "singola" | "doppia" | "tripla";