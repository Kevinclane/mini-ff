import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatantInputComponent } from './combatant-input.component';

describe('CombatantInputComponent', () => {
  let component: CombatantInputComponent;
  let fixture: ComponentFixture<CombatantInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatantInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatantInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
