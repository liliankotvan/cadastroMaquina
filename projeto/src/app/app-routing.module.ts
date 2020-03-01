import { MaquinaFormComponent } from './maquina-form/maquina-form.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'listar', component: DataTableComponent},
  {path: 'cadastrar', component: MaquinaFormComponent},
  {path: '', redirectTo: '/listar', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
