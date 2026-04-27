import { Component, inject, signal } from '@angular/core';
import { AddWordForm } from './components/add-word-form/add-word-form';

import { ResetWord } from './components/reset-word/reset-word';
import { ListWords } from './components/list-words/list-words';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { InputService } from './service/input-service';
import { Word } from './types/word';


@Component({
  selector: 'app-root',
  imports: [Header, AddWordForm, ResetWord, ListWords, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private inputService = inject(InputService);
  protected readonly title = signal('Dizionario');

  onAddWord(word: Word) {
    this.inputService.addWord(word);
  }

  onReset() {
    this.inputService.resetWord();
  }
}
