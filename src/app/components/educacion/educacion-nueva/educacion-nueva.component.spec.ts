import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionNuevaComponent } from './educacion-nueva.component';

describe('EduacionNuevaComponent', () => {
  let component: EducacionNuevaComponent;
  let fixture: ComponentFixture<EducacionNuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionNuevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
