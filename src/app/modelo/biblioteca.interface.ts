import { Libro } from "./libro.interface";

export interface Biblioteca{

  nombre: string;
  direccion: string;
  ciudad: string;
  catalogo: Libro[];

}
