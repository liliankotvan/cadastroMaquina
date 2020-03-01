import { MaquinaService } from './shared/maquina.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MaquinaFormComponent } from './maquina-form/maquina-form.component';
import { MaquinaEditComponent } from './maquina-edit/maquina-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './data-table/data-table.component';


import { MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatAutocompleteModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatSelectModule,
 } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    MaquinaFormComponent,
    DataTableComponent,
    MaquinaEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
  ],
  providers: [MaquinaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
