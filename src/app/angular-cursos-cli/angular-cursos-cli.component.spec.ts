import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCursosCliComponent } from './angular-cursos-cli.component';

describe('AngularCursosCliComponent', () => {
  let component: AngularCursosCliComponent;
  let fixture: ComponentFixture<AngularCursosCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCursosCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCursosCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
