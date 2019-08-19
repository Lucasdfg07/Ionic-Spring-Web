import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFornecedorPage } from './edit-fornecedor.page';

describe('EditFornecedorPage', () => {
  let component: EditFornecedorPage;
  let fixture: ComponentFixture<EditFornecedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFornecedorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFornecedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
