    
import { TestBed } from '@angular/core/testing';

import {FornecedoresService} from "../service/fornecedores.service"

describe('CategoriasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FornecedoresService = TestBed.get(FornecedoresService);
    expect(service).toBeTruthy();
  });
})