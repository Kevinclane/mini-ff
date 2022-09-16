import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterConsoleComponent } from './encounter-console.component';

describe('EncounterConsoleComponent', () => {
  let component: EncounterConsoleComponent;
  let fixture: ComponentFixture<EncounterConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterConsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
