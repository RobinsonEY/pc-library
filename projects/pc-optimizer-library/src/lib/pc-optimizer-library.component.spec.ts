import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcOptimizerLibraryComponent } from './pc-optimizer-library.component';

describe('PcOptimizerLibraryComponent', () => {
  let component: PcOptimizerLibraryComponent;
  let fixture: ComponentFixture<PcOptimizerLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcOptimizerLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcOptimizerLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
