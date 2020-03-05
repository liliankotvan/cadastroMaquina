import { Maquina } from './../shared/maquina';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource } from './data-table-datasource';
import { MaquinaService } from '../shared/maquina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable, {static: true}) table: MatTable<Maquina>;
  dataSource: DataTableDataSource;

  displayedColumns = ['codigo', 'descricao', 'linha'];

  maquinas: Maquina[];


  constructor(
                private maqService: MaquinaService,
                private router: Router
            ) {}

  editMaquina(maq: Maquina) {
    console.log(maq);
  // localStorage.removeItem('editMaquinaId');
  //  localStorage.setItem('editMaquinaId', maq.id.toString());
    this.router.navigate(['edit']);

  }

  deleteMaquina(maq: Maquina) {
    console.log(maq);
    this.maqService.delete(maq);
  }

  ngOnInit() {
    console.log("## INICIANDO NGOnInit##")
    console.log('maq:init');
    this.maquinas = this.maqService.getall();
    console.log(this.maquinas);
    console.log("## INICIANDO NGOnInit##")
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
