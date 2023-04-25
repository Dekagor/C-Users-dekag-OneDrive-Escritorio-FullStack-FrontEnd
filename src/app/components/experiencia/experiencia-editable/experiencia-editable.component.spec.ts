import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaEditableComponent } from './experiencia-editable.component';

describe('ExperienciaEditableComponent', () => {
  let component: ExperienciaEditableComponent;
  let fixture: ComponentFixture<ExperienciaEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaEditableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
