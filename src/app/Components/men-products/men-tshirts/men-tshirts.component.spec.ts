import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenTshirtsComponent } from './men-tshirts.component';

describe('MenTshirtsComponent', () => {
  let component: MenTshirtsComponent;
  let fixture: ComponentFixture<MenTshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenTshirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenTshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
