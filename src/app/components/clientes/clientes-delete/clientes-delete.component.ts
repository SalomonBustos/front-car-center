import { ClienteResponse } from './../../../models/ClienteResponse';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.component.service';


@Component({
  selector: 'app-clientes-delete',
  templateUrl: './clientes-delete.component.html',
  styleUrls: ['./clientes-delete.component.sass']
})
export class ClientesDeleteComponent {

  cliente: ClienteResponse;

  constructor(
    public dialogRef: MatDialogRef<ClientesDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public service: ClienteService
  ) {
    this.cliente = data.cliente;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.service.delete(this.cliente.id).subscribe((result: any) => {
      this.dialogRef.close({ isError: false, message: "CLIENTE ELIMINADO EXITOSAMENTE!" });
    }, err => {
      this.dialogRef.close({ isError: true, message: "ERROR AL INTENTAR ELIMINAR EL CLIENTE" });
    });
  }

}
