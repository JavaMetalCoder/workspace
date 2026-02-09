from crewai import Agent, Task, Crew, Process
from langchain_ollama import OllamaLLM

# Configuriamo il "motore" locale sulla tua GPU
local_llm = OllamaLLM(model="llama3.1")

# AGENTE 1: L'esperto di Logica e Teoria (Il "Cervello")
senior_architect = Agent(
    role='Senior Software Architect',
    goal='Analizzare la logica del codice di Fabio e spiegare i concetti profondi dietro le tecnologie Full Stack.',
    backstory='Sei un veterano IT cinico ma estremamente brillante. Non ti piacciono le soluzioni approssimative e ami spiegare il "perché" le cose funzionano, non solo il "come".',
    verbose=True,
    allow_delegation=False,
    llm=local_llm
)

# AGENTE 2: Il Mentor Pratico (Il "Correttore")
code_mentor = Agent(
    role='Full Stack Mentor',
    goal='Revisionare il codice JavaScript/Python di Fabio, trovare bug e suggerire Best Practices.',
    backstory='Sei un esperto di Clean Code. Il tuo obiettivo è rendere Fabio un programmatore d\'élite. Se Fabio scrive una "cazzata", lo correggi subito con ironia e competenza.',
    verbose=True,
    allow_delegation=False,
    llm=local_llm
)

# IL COMPITO: Analisi di un esercizio del corso
def chiedi_consiglio(codice_utente):
    analisi_task = Task(
        description=f"Analizza questo codice scritto da Fabio per il corso LabforWeb: '{codice_utente}'. Verifica la logica e spiega i concetti di programmazione coinvolti.",
        expected_output="Una spiegazione concettuale del codice e l'identificazione di eventuali errori logici.",
        agent=senior_architect
    )

    revisione_task = Task(
        description="Prendi l'analisi dell'architetto e scrivi una versione ottimizzata del codice. Aggiungi commenti sarcastici ma utili per far capire a Fabio dove ha sbagliato.",
        expected_output="Snippet di codice pulito, commentato e ottimizzato.",
        agent=code_mentor
    )

    # Creazione della "Crew" (L'esercito al tuo comando)
    my_crew = Crew(
        agents=[senior_architect, code_mentor],
        tasks=[analisi_task, revisione_task],
        process=Process.sequential # Prima l'architetto, poi il mentor
    )

    return my_crew.start()

# ESEMPIO D'USO
mio_codice = "function salvaDati() { var x = 10; console.log(x); }" # Metti qui il tuo codice
risultato = chiedi_consiglio(mio_codice)
print(risultato)

import os

def analizza_file_locale(percorso_file):
    # Verifichiamo se il file esiste davvero
    if not os.path.exists(percorso_file):
        return "Fabio, non dire cazzate: il file non esiste a quel percorso!"

    # Leggiamo il contenuto del file
    with open(percorso_file, 'r', encoding='utf-8') as f:
        contenuto_codice = f.read()

    # Passiamo il contenuto agli agenti
    analisi_task = Task(
        description=f"Analizza il contenuto di questo file: {contenuto_codice}",
        expected_output="Analisi tecnica e correzione del codice.",
        agent=code_mentor
    )

    my_crew = Crew(agents=[code_mentor], tasks=[analisi_task])
    return my_crew.start()

# ESEMPIO: Gli dai il percorso del file su cui stai lavorando
file_da_controllare = "C:/Users/Fabio/Desktop/LabforWeb/esercizio.js"
print(analizza_file_locale(file_da_controllare))