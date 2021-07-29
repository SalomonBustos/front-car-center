import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ClienteResponse } from 'src/app/models/ClienteResponse';
import { ModalResult } from 'src/app/models/modal.result';
import { ClienteService } from 'src/app/services/cliente.component.service';
import { ClientesCreateComponent } from '../clientes-create/clientes-create.component';
import { ClientesDeleteComponent } from '../clientes-delete/clientes-delete.component';
import { ClientesEditComponent } from '../clientes-edit/clientes-edit.component';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  pageLimitOptions = [
    { value: 5 },
    { value: 10 },
    { value: 25 },
    { value: 100 },
  ];

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  apiResponse: ClienteResponse[];

  columns = [
    { name: 'Primer Nombre' },
    { name: 'Segundo Nombre' },
    { name: 'Primer Apellido' },
    { name: 'Segundo Apellido' },
    { name: 'Tipo Documento' },
    { name: 'Documento' },
    { name: 'Celular' },
    { name: 'Direccion' },
    { name: 'Correo Electronico' },
    { name: 'Actions' }
  ];

  constructor(
    private service: ClienteService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {

  }

  ngOnInit() {
    this.showData();
  }

  showData(): void {
    this.apiResponse = [];
    this.service.getAllCliente().subscribe((result: any) => {
      this.apiResponse = result;
    },
      error => {
        this.apiResponse = [];
      });
  }

  addNew() {
    const dialogRef = this.dialog.open(ClientesCreateComponent, {
      data: {
        clienteService: this.service
      },
      width: '50%'

    });
    dialogRef.afterClosed().subscribe((result: ModalResult) => {
      if (result != undefined) {
        if (result.isError) {
          this.showNotification(
            'red',
            result.message,
            'bottom',
            'center'
          );
        } else {
          this.showNotification(
            'black',
            result.message,
            'bottom',
            'center'
          );
        }
      }
      this.showData();
    });
  }


    editRow(row)
    {
      const dialogRef = this.dialog.open(ClientesEditComponent, {
        data: {
          cliente: row
        },
        width:'50%'
      });
      dialogRef.afterClosed().subscribe((result: ModalResult) => {
        if (result != undefined) {
          if (result.isError) {
            this.showNotification(
              'red',
              result.message,
              'bottom',
              'center'
            );
          } else {
            this.showNotification(
              'black',
              result.message,
              'bottom',
              'center'
            );
          }
        }
        this.showData();
      });
    }

    deleteRow(row: any){
      const dialogRef = this.dialog.open(ClientesDeleteComponent, {
        data: {
          cliente: row,
        },
        width:'50%'
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result != undefined) {
          if (result.isError) {
            this.showNotification(
              'red',
              result.message,
              'bottom',
              'center'
            );
          } else {
            this.showNotification(
              'black',
              result.message,
              'bottom',
              'center'
            );
          }
        }
        this.showData();
      });
    }

  showNotification(colorName, text, placementFrom, placementAlign) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName
    });
  }

}
