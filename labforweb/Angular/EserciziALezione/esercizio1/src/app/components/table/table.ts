import { Component, input, output } from '@angular/core';


@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  products = input.required<IProduct[]>();
  onDeleteProduct = output<number>();

  delete(id: number): void {
    console.log("Elimina id: ", id);
    this.onDeleteProduct.emit(id);
  }
}
