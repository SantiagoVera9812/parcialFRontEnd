import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Biblioteca } from './modelo/biblioteca.interface';

@Injectable()
export class ListarBibliotecasService {

  constructor(private httpclient: HttpClient) { }

  getAll():Observable<Biblioteca[]>{

    return this.httpclient.get<Biblioteca[]>("//localhost:8080/Biblioteca/Listar")
  }
}
