import { TestBed } from '@angular/core/testing';

import { ListarLibrosService } from './listar-libros.service';

describe('ListarLibrosService', () => {
  let service: ListarLibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarLibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
