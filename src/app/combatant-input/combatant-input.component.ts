import { Component, Input, OnInit } from '@angular/core';
import { ActionFactory } from '../functionalityFiles/actionFactory';
import GameTimer from '../functionalityFiles/gameTimer';
import IAction from '../models/interfaces/Iaction';
import ICombatant from '../models/interfaces/Icombatant';
import IEncounter from '../models/interfaces/Iencounter';
import { EncountersController } from '../psudoServer/controllers/encountersController';

@Component({
  selector: 'app-combatant-input',
  templateUrl: './combatant-input.component.html',
  styleUrls: ['./combatant-input.component.css']
})
export class CombatantInputComponent implements OnInit {

  @Input('encounter') encounter: IEncounter | null = null;

  gameTimer: GameTimer;
  encountersController: EncountersController;

  enemies?: ICombatant[];

  viewState: string = "root";
  targetFunction: Function = () => { };

  availableActions: IAction[] = [];

  constructor(private _actionFactory: ActionFactory, encountersController: EncountersController, gameTimer: GameTimer) {
    this.encountersController = encountersController;
    this.gameTimer = gameTimer;
  }

  ngOnInit(): void {
    let allCombatants: ICombatant[] | undefined = this.encounter?.party.concat(this.encounter.enemies);
    if (allCombatants) {
      let whosTurnCombatant: ICombatant | undefined = allCombatants.find(c => c.id == this.encounter?.whosTurnId);
      this.availableActions = this._actionFactory.getActions(whosTurnCombatant);
    }
    this.setupTargets();
  }

  setupTargets() {
    this.enemies = this.encounter?.enemies;
    if (this.enemies && this.enemies?.length > 1) {
      let enemyBackup = this.enemies[1];
      this.enemies.splice(1, 1);
      this.enemies.unshift(enemyBackup)
    }
  }

  updateViewState(action: IAction) {
    switch (action.name) {
      case "Attack":
        this.viewState = "target";
        this.targetFunction = action.action
        break;
    }
  }


}
