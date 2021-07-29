import { ClientesListComponent } from './components/clientes/clientes-list/clientes-list.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatFormFieldModule, MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClientesCreateComponent } from './components/clientes/clientes-create/clientes-create.component';
import { ClientesEditComponent } from './components/clientes/clientes-edit/clientes-edit.component';
import { ClientesDeleteComponent } from './components/clientes/clientes-delete/clientes-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesListComponent,
    ClientesCreateComponent,
    ClientesEditComponent,
    ClientesDeleteComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    NgxDatatableModule,
    MatDialogModule,
    MatSnackBarModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ClientesCreateComponent,
    ClientesEditComponent,
    ClientesDeleteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
