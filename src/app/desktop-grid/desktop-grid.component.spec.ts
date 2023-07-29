import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopGridComponent } from './desktop-grid.component';

describe('DesktopGridComponent', () => {
  let component: DesktopGridComponent;
  let fixture: ComponentFixture<DesktopGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopGridComponent]
    });
    fixture = TestBed.createComponent(DesktopGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
