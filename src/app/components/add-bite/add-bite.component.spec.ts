import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBiteComponent } from './add-bite.component';

describe('AddBiteComponent', () => {
  let component: AddBiteComponent;
  let fixture: ComponentFixture<AddBiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
