import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayFooterComponent } from './gray-footer.component';

describe('GrayFooterComponent', () => {
  let component: GrayFooterComponent;
  let fixture: ComponentFixture<GrayFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrayFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrayFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
