import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenTrousersComponent } from './men-trousers.component';

describe('MenTrousersComponent', () => {
  let component: MenTrousersComponent;
  let fixture: ComponentFixture<MenTrousersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenTrousersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenTrousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
