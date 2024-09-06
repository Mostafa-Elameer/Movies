import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResirToWatchComponent } from './resir-to-watch.component';

describe('ResirToWatchComponent', () => {
  let component: ResirToWatchComponent;
  let fixture: ComponentFixture<ResirToWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResirToWatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResirToWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
