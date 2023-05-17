import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenTShirtsComponent } from './women-tshirts.component';

describe('WomenTShirtsComponent', () => {
  let component: WomenTShirtsComponent;
  let fixture: ComponentFixture<WomenTShirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenTShirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenTShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
