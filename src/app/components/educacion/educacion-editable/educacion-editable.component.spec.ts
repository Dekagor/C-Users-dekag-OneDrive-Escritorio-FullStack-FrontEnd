import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionEditableComponent } from './educacion-editable.component';

describe('EducacionEditableComponent', () => {
  let component: EducacionEditableComponent;
  let fixture: ComponentFixture<EducacionEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionEditableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
