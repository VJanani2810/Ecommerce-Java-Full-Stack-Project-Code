import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangleProductComponent } from './sangle-product.component';

describe('SangleProductComponent', () => {
  let component: SangleProductComponent;
  let fixture: ComponentFixture<SangleProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SangleProductComponent]
    });
    fixture = TestBed.createComponent(SangleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
