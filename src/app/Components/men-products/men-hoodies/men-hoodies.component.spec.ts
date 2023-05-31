import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenHoodiesComponent } from './men-hoodies.component';

describe('MenHoodiesComponent', () => {
  let component: MenHoodiesComponent;
  let fixture: ComponentFixture<MenHoodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenHoodiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenHoodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
