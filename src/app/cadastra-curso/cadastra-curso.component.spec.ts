import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraCursoComponent } from './cadastra-curso.component';

describe('CadastraCursoComponent', () => {
  let component: CadastraCursoComponent;
  let fixture: ComponentFixture<CadastraCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
