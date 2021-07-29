export class ModalResult {

  isError: boolean;
  message: string;

  constructor(_result: any) {
    this.isError = _result.isError ? _result.isError : false;
    this.message = _result.message;
  }
}
