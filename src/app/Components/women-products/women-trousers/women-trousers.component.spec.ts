import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenTrousersComponent } from './women-trousers.component';

describe('WomenTrousersComponent', () => {
  let component: WomenTrousersComponent;
  let fixture: ComponentFixture<WomenTrousersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenTrousersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenTrousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
