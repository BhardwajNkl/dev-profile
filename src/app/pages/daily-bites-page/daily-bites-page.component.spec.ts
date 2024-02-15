import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyBitesPageComponent } from './daily-bites-page.component';

describe('DailyBitesPageComponent', () => {
  let component: DailyBitesPageComponent;
  let fixture: ComponentFixture<DailyBitesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyBitesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyBitesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
