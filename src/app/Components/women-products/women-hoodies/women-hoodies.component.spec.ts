import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenHoodiesComponent } from './women-hoodies.component';

describe('WomenHoodiesComponent', () => {
  let component: WomenHoodiesComponent;
  let fixture: ComponentFixture<WomenHoodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenHoodiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenHoodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
