import { TestBed } from '@angular/core/testing';

import { ListarBibliotecasService } from './listar-bibliotecas.service';

describe('ListarBibliotecasService', () => {
  let service: ListarBibliotecasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarBibliotecasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
