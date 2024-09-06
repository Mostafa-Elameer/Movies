import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTvComponent } from './free-tv.component';

describe('FreeTvComponent', () => {
  let component: FreeTvComponent;
  let fixture: ComponentFixture<FreeTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeTvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
