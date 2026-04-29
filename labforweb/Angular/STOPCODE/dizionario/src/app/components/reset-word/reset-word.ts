import { Component, output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-word',
  imports: [FormsModule],
  templateUrl: './reset-word.html',
  styleUrl: './reset-word.css',
})
export class ResetWord {

  wordSearch: string = '';

  onResetEvent = output<string>();
  onSearchEvent = output<string>();

  onClickReset() {
    this.onResetEvent.emit(this.wordSearch);
  }

  onInputSearch() {
    this.onSearchEvent.emit(this.wordSearch);
  }


  
}
