import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeMoviesComponent } from './free-movies.component';

describe('FreeMoviesComponent', () => {
  let component: FreeMoviesComponent;
  let fixture: ComponentFixture<FreeMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
