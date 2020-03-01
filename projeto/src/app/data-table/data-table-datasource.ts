import { Maquina } from './../shared/maquina';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


const EXAMPLE_DATA: Maquina[] = [
  {id: 0, codigo: '142dd3', descricao: 'Estufa de aquecimento: Utilizada principalmente na indústria de têxtil', linha: 'Linha A'},
  {id: 1, codigo: '23r3dd', descricao: 'Fresadoras: São responsáveis pela parte de usinagem, encaixes ou juntas', linha: 'Linha B'},
  {id: 2, codigo: '3d33d3', descricao: 'Realiza o transporte de materiais dentro do espaço interno da empresa', linha: 'Linha A'},
];

export class DataTableDataSource extends DataSource<Maquina> {


  data: Maquina[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  connect(): Observable<Maquina[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() {}

  private getPagedData(data: Maquina[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: Maquina[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'codigo': return compare(a.codigo, b.codigo, isAsc);
        case 'descricao': return compare(a.descricao, b.descricao, isAsc);
        case 'linha': return compare(a.linha, b.linha, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
