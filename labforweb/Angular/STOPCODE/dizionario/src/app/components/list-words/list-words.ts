import { Component, input } from '@angular/core';
import { Word } from '../../types/word';

@Component({
  selector: 'app-list-words',
  imports: [],
  templateUrl: './list-words.html',
  styleUrl: './list-words.css',
})
export class ListWords {
  parolaList = input.required<Word>();
}
