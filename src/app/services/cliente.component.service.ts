import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private API_URL;

  constructor(private httpClient: HttpClient) {
    this.API_URL = environment.api.base + environment.api.clientes;
  }

  create(request: any): Observable<any> {
    return this.httpClient.post<any>(this.API_URL, request);
  }

  getClienteById(id: string): any {
    return this.httpClient.get(this.API_URL +'/'+ id);
  }

  getAllCliente(): any {
    return this.httpClient.get(this.API_URL + '/GetAll');
  }

  update(cliente: any): Observable<any> {
    return this.httpClient.put<any>(this.API_URL +'/'+ cliente.id, cliente);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.API_URL +'/'+ id);
  }

}
