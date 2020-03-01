import { Injectable } from '@angular/core';
import { Maquina } from './../shared/maquina';

@Injectable({
  providedIn: 'root'
})

export class MaquinaService {

  data: Maquina[];

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
    console.log('maquinaservice:', this.getall);
    console.log(this.data);
    return this.data;
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
