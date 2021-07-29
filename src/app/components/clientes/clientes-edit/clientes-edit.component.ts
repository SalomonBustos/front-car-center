import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClienteRequestCreate } from 'src/app/models/ClienteRequestCreate';
import { ClienteRequestUpdate } from 'src/app/models/ClienteRequestUpdate';
import { ClienteService } from 'src/app/services/cliente.component.service';


@Component({
  selector: 'app-clientes-edit',
  templateUrl: './clientes-edit.component.html',
  styleUrls: ['./clientes-edit.component.css']
})
export class ClientesEditComponent implements OnInit {
  dialogTitle: string;
  form: FormGroup;
  cliente: ClienteRequestUpdate;

  constructor(
    public dialogRef: MatDialogRef<ClientesEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public service: ClienteService,
    private fb: FormBuilder
  ) {
    this.cliente = data.cliente;;
    this.dialogTitle = 'Editar Cliente';
    this.form = this.createForm();
  }

  ngOnInit() {
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: [this.cliente.id, [Validators.required]],
      primerNombre: [this.cliente.primerNombre, [Validators.required]],
      segundoNombre: [this.cliente.segundoNombre],
      primerApellido: [this.cliente.primerApellido, [Validators.required]],
      segundoApellido: [this.cliente.segundoApellido],
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
    this.service.update(data).subscribe((response: any) => {
      this.dialogRef.close({ isError: false, message: "CLIENTE ACTUALIZADO EXITOSAMENTE!" });
    }, err => {
      this.dialogRef.close({ isError: true, message: err.error.message });
    });
  }
}
