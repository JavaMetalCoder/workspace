import { Component, inject, output } from '@angular/core';
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

  
  protected word = {
    parola: "",
    significato: ""
  }
  
  onAddWord = output<Word>();

  onAddWordBtn() {
    this.onAddWord.emit(this.word);
  }
}
