import { Component, signal } from '@angular/core';
import { AddWordForm } from './components/add-word-form/add-word-form';

import { ResetWord } from './components/reset-word/reset-word';
import { ListWords } from './components/list-words/list-words';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [Header, AddWordForm, ResetWord, ListWords, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Dizionario');
}
