import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreaForFreeComponent } from './strea-for-free.component';

describe('StreaForFreeComponent', () => {
  let component: StreaForFreeComponent;
  let fixture: ComponentFixture<StreaForFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreaForFreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreaForFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
