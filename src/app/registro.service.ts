import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from './modelo/libro.interface';
@Injectable()
export class RegistroService {

  constructor(private httpClient: HttpClient) {}

  addUser(user: Libro){
    return this.httpClient.post('http://localhost:8080/Track/Agregar', user);
  }
}
