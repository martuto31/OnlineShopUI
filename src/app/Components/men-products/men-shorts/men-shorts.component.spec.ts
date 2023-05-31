import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenShortsComponent } from './men-shorts.component';

describe('MenShortsComponent', () => {
  let component: MenShortsComponent;
  let fixture: ComponentFixture<MenShortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenShortsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenShortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
