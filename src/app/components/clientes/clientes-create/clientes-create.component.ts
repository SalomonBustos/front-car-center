import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClienteRequestCreate } from 'src/app/models/ClienteRequestCreate';
import { ClienteService } from 'src/app/services/cliente.component.service';


@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent implements OnInit {
  dialogTitle: string;
  form: FormGroup;
  cliente: ClienteRequestCreate;

  constructor(
    public dialogRef: MatDialogRef<ClientesCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public service: ClienteService,
    private fb: FormBuilder
  ) {
    this.cliente = new ClienteRequestCreate({});
    this.dialogTitle = 'Nuevo Cliente';
    this.form = this.createForm();
  }

  ngOnInit() {
  }

  createForm(): FormGroup {
    return this.fb.group({
      primerNombre: [this.cliente.primerNombre, [Validators.required]],
      segundoNombre: [this.cliente.segundoNombre, [Validators.required]],
      primerApellido: [this.cliente.primerApellido, [Validators.required]],
      segundoApellido: [this.cliente.segundoApellido, [Validators.required]],
      tipoDocumento: [this.cliente.tipoDocumento, [Validators.required]],
      documento: [this.cliente.documento, [Validators.required]],
      celular: [this.cliente.celular, [Validators.required]],
      direccion: [this.cliente.direccion, [Validators.required]],
      correoElectronico: [this.cliente.correoElectronico, [Validators.required]],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public save(): void {
    var data = this.form.getRawValue();
    this.service.create(data).subscribe((response: any) => {
      this.dialogRef.close({ isError: false, message: "CLIENTE CREADO EXITOSAMENTE!" });
    }, err => {
      this.dialogRef.close({ isError: true, message: err.error.message });
    });
  }
}
