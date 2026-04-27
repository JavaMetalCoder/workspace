import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-word-form',
  imports: [FormsModule],
  templateUrl: './add-word-form.html',
  styleUrl: './add-word-form.css',
})
export class AddWordForm {
  textWord = "";
  textSign = "";
}
