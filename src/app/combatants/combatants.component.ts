import { Component, Input, OnInit } from '@angular/core';
import GameTimer from '../functionalityFiles/gameTimer';
import ICombatant from '../models/interfaces/Icombatant';
import IEncounter from '../models/interfaces/Iencounter';


@Component({
  selector: 'app-combatants',
  templateUrl: './combatants.component.html',
  styleUrls: ['./combatants.component.css']
})
export class CombatantsComponent implements OnInit {

  @Input('side') side: string = "";
  @Input('encounter') encounter: IEncounter | null = null;

  combatants: ICombatant[] | undefined;

  constructor(private _gameTimer: GameTimer) {

  }

  ngOnInit(): void {
    if (this.side == "party") {
      this.combatants = this.encounter?.party;
    } else if (this.side == "enemy") {
      this.combatants = this.encounter?.enemies;
    }
  }

  positionImage() {
    if (this.side == "enemy") {
      return {
        'flex-direction': 'row-reverse'
      }
    } else {
      return {}
    }
  }

}
