// ————— 1) Type Alias
type ID = number | string;

// ————— 2) Enum
enum Stato {
  Attivo   = "ATTIVO",
  Inattivo = "INATTIVO",
  Sospeso = "SOSPESO"
}

// ————— 3) Interfaccia
interface Persona {
  id: ID;
  nome: string;
  stato: Stato;
}

// ————— 4) Funzioni
function creaPersona(id: ID, nome: string, stato: Stato = Stato.Attivo): Persona {
  return { id, nome, stato };
}

function stampaPersona(p: Persona): void {
  console.log(`Persona: id=${p.id}, nome=${p.nome}, stato=${p.stato}`);
}

// ————— 5) Astrazione + Classi + Ereditarietà
abstract class Veicolo {
  constructor(public marca: string, public anno: number) {}

  abstract avvia(): void;

  info(): void {
    console.log(`Veicolo: ${this.marca}, anno: ${this.anno}`);
  }
}

class Auto extends Veicolo {
  constructor(marca: string, anno: number, public modello: string) {
    super(marca, anno);
  }

  avvia(): void {
    console.log(`Avviata auto ${this.marca} ${this.modello} (${this.anno})`);
  }
}

// ————— 6) Tuple
type RecordAcquisto = [ID, Persona, Veicolo];

// ————— 7) Uso dell’esempio
const persona1 = creaPersona(1, "Alice", Stato.Attivo);
stampaPersona(persona1);

const auto1 = new Auto("Toyota", 2023, "Corolla");
auto1.info();
auto1.avvia();

const acquisto: RecordAcquisto = [
  "R-001",
  persona1,
  auto1
];

console.log("Acquisto:", acquisto);


document.getElementById("persona-id")!.textContent = persona1.id.toString();
document.getElementById("persona-nome")!.textContent = persona1.nome;
document.getElementById("persona-stato")!.textContent = persona1.stato;

document.getElementById("veicolo-marca")!.textContent = auto1.marca;
document.getElementById("veicolo-anno")!.textContent = auto1.anno.toString();
document.getElementById("veicolo-modello")!.textContent = auto1.modello;

document.getElementById("acquisto-id")!.textContent = acquisto[0].toString();

//Nota: il ! è la non-null assertion di TypeScript: siamo sicuri che l’elemento esista nel DOM.