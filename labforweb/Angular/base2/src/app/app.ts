import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { CardCorsi } from './components/card-corsi/card-corsi';
import { ICorso } from './type/corso';

@Component({
  selector: 'app-root',
  imports: [Header, CardCorsi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  listaCorsi: Array<ICorso> = [
    {
    titolo: 'AI Full Stack Developer',
    descrizione: "Diventa Full Stack Web Developer con Python. Un corso pratico di 6 mesi, in presenza o online, con competenze aperte al mondo dell'AI",
    dataDiInizio: '01/01/2027',
    prezzo: 4000,
    img: 'https://labforweb-vod.b-cdn.net/immagini/labforweb-site/2024/corso-full-stack-developer-img.jpg'
  },
  {
    titolo: 'CyberSecurity Specialist',
    descrizione: "Diventa CyberSecurity Specialist con Python. Un corso pratico di 6 mesi, in presenza o online, con competenze aperte al mondo della CyberSecurity",
    dataDiInizio: '01/01/2027',
    prezzo: 5000,
    img: 'https://labforweb-vod.b-cdn.net/immagini/labforweb-site/2025/corso-cyber-security-specialist-labforweb.jpg'
  }
  ]
  
}
