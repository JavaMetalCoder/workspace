import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { Word, WordList } from '../types/word';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  private wordList: WritableSignal<WordList> = signal([]);
  private searchTerm = signal<string>('');

  
  getWordList() {
    return this.wordList.asReadonly();
  }

  addWord(word: Word) {
    this.checkWord(word);
    if (word.isFormValid === true && !this.isJustAddedWord(word)) {
      this.wordList.update((prev: WordList) => [...prev, { ...word }]);
      word = {
        parola: "",
        significato: "",
        isFormValid: false
      };
    } else {
      if(this.isJustAddedWord(word)) {
        alert('Parola già inserita!');
      } else {
        alert('Devi inserire una parola e un significato!');
      }

    }
    

  }

  resetWord() {
    this.wordList.set([]);
    alert('Lista resettata!');
  }

  checkWord(word: Word): void {
    const wordTrim = word.parola.trim();
    const significatoTrim = word.significato.trim();

    if (!wordTrim || !significatoTrim) {
      word.isFormValid = false;
    } else {
      word.isFormValid = true;
    }
  }

  isJustAddedWord(word: Word): boolean {
    
    return this.wordList().some(w => w.parola.toLowerCase() === word.parola.toLowerCase());
  }

  filteredWordList = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) return this.wordList();
    
    return this.wordList().filter((word: Word) => 
      word.parola.toLowerCase().includes(term)
    );
  });

  updateSearchTerm(term: string) {
    this.searchTerm.set(term);
  }
    

  
  


}
