import { Injectable } from '@angular/core';
import { Maquina } from './../shared/maquina';
import { DataTableDataSource } from '../data-table/data-table-datasource';

@Injectable({
  providedIn: 'root'
})

export class MaquinaService {

  data: any;
  result:any
  constructor(
    dataObserver : DataTableDataSource // Construindo e importando os dados para que o getall possa ver os dados fake
  ) {
    this.result = dataObserver
    
        console.log(dataObserver) // Esse objeto e uma promessa
  }
  create(maq: Maquina) {
    const itemIndex = this.data.length;
    maq.id = this.getnextId();
    console.log(maq);
    this.data[itemIndex] = maq;
  }

  delete(maq: Maquina) {
    this.data.splice(this.data.indexOf(maq), 1);
  }

  update(maq: Maquina) {
    const itemIndex = this.data.findIndex(item => item.id === maq.id);
    console.log(itemIndex);
    this.data[itemIndex] = maq;
  }

  getall(): Maquina[] {
    console.log("## Buscando dados ja cadastrados Inicio SERVICE##")

    console.log(this.result);

    console.log("## Buscando dados ja cadastrados Inicio SERVICE##")
    return this.result.data; // Devolvendo[] de items de maquina
  }

  getMaqById(id: number) {
    console.log(id);
    const itemIndex = this.data.findIndex(item => item.id === id);
    console.log(itemIndex);
    return this.data[itemIndex];
  }

  getnextId(): number {
    let highest = 0;
    this.data.forEach(function(row) {
      if (highest === 0) {
        highest = row.id;
      }
      if (highest < row.id) {
        highest = row.id;
      }
    });
    return highest + 1;
  }
}
