import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from './modelo/libro.interface';

@Injectable()
export class ListarLibrosService {

  constructor(private httpclient: HttpClient) { }

  getAll():Observable<Libro[]>{

    return this.httpclient.get<Libro[]>("//localhost:8080/Libro/Listar")
  }
}
