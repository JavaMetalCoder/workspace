import { Component, inject, output, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Word } from '../../types/word';
import { InputService } from '../../service/input-service';

@Component({
  selector: 'app-add-word-form',
  imports: [FormsModule],
  templateUrl: './add-word-form.html',
  styleUrl: './add-word-form.css',
})
export class AddWordForm {
  protected word: Word = {
    parola: "",
    significato: "",
    isFormValid: false
  }
  
  //data-binding
  onAddWord = output<Word>();

  onAddWordBtn() {
    this.onAddWord.emit(this.word);
    
  
    this.word = {
      parola: "",
      significato: "",
      isFormValid: false
    };
  }
}
