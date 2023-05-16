import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsProductsComponent } from './kids-products.component';

describe('KidsProductsComponent', () => {
  let component: KidsProductsComponent;
  let fixture: ComponentFixture<KidsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
