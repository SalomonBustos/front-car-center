export class ClienteRequestCreate {
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  tipoDocumento: string;
  documento: string;
  celular: string;
  direccion: string;
  correoElectronico: string;

  constructor(_request: any) {
    this.primerNombre = _request.primerNombre;
    this.segundoNombre = _request.segundoNombre;
    this.primerApellido = _request.primerApellido;
    this.segundoApellido = _request.segundoApellido;
    this.tipoDocumento = _request.tipoDocumento;
    this.documento = _request.documento;
    this.celular = _request.celular;
    this.direccion = _request.direccion;
    this.correoElectronico = _request.correoElectronico;
  }
}
