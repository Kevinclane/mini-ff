import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatantsComponent } from './combatants.component';

describe('CombatantsComponent', () => {
  let component: CombatantsComponent;
  let fixture: ComponentFixture<CombatantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
