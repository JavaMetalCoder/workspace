import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Table } from './components/table/table';
import { log } from 'console';


@Component({
  selector: 'app-root',
  imports: [Header, Table],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products: IProduct[] = [];
addProducts(): void {
  this.products = [
  { id: 1, name: "Laptop", price: 999.99, isAvailable: true },
  { id: 2, name: "Smartphone", price: 699.49, isAvailable: true },
  { id: 3, name: "Tablet", price: 399.99, isAvailable: false },
  { id: 4, name: "Monitor", price: 249.89, isAvailable: true },
  { id: 5, name: "Keyboard", price: 49.99, isAvailable: true },
  { id: 6, name: "Mouse", price: 29.99, isAvailable: false },
  { id: 7, name: "Headphones", price: 89.99, isAvailable: true },
  { id: 8, name: "Webcam", price: 59.99, isAvailable: true },
  { id: 9, name: "Printer", price: 149.99, isAvailable: false },
  { id: 10, name: "External Hard Drive", price: 119.99, isAvailable: true }
]
}

deleteProd(id: number): void {
  console.log("Elimina dal padre: ", id);
  this.products = this.products.filter(p => p.id !== id);
}
}
