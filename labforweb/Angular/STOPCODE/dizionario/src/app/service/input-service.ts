import { Injectable, WritableSignal, signal } from '@angular/core';
import { Word, WordList } from '../types/word';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  private wordList: WritableSignal<WordList> = signal([]);

  addWord(word: Word) {
    this.wordList.update((prev: WordList) => [...prev, word]);
  }

  resetWord() {
    this.wordList.set([]);
  }
}
