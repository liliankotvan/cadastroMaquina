import { Injectable } from '@angular/core';
import { Maquina } from './../shared/maquina';
import { DataTableDataSource } from '../data-table/data-table-datasource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MaquinaService {
  map(arg0: (result: Response) => any) {
    throw new Error("Method not implemented.");
  }

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

  getall(): any {
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

  getAll(){

  
  // let promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
        
  //       resolve(this.result.data);
  //     }, 2000);


  //   });
  //   return promise;

      // this.http.get(this.url)
      //   .toPromise()
      //   .then(
      //         res => { 
      //           resolve(res);
      //         },
      //         msg => { 
      //           reject(msg);
      //           }
      //   );
  }
  process(data:any){
      console.log("Transformar dado aqui")

          // console.log(data.response.result)
          let example :any[]=data.response.result.Example
          let intent  :any[]=data.response.result.Intent
          let dataTransform:any[]=[];
          let i:number=0;
          let obj1 = data.response.result.Example;
          let obj2 = data.response.result.Intent
          var arr1 = Array.from(
                            Object.keys(obj1),
                            k => obj1[k]
                            );

          var arr2 = Array.from(
                              Object.keys(obj2),
                              k=>obj2[k]
                              );                  

          // console.log(arr1)
          // console.log(arr2)

          // console.log(obj1)
          // console.log(obj2)

          for (let item of arr1){
              let linha = {
                "N":i,
                "Example":arr1[i],

                "Intent" :arr2[i],
                
              }
              //  console.log(linha)
              dataTransform.push(linha);
              i++;
          }
          // console.log(dataTransform)
          return dataTransform;
    }// process()
}
