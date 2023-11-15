import { Component, OnInit } from '@angular/core';
import { ListarBibliotecasService } from '../listar-bibliotecas.service';
import { Biblioteca } from '../modelo/biblioteca.interface';

@Component({
  selector: 'app-listar-bibliotecas',
  templateUrl: './listar-bibliotecas.component.html',
  styleUrls: ['./listar-bibliotecas.component.css']
})
export class ListarBibliotecasComponent implements OnInit {

  bibliotecas: Biblioteca[] = [];

  constructor(private biblioListaService: ListarBibliotecasService) { }

  ngOnInit(): void {
    this.biblioListaService.getAll().subscribe((data: Biblioteca[]) => {

      this.bibliotecas = data;
    })
  }

}
