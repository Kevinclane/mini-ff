import { Component, OnInit } from '@angular/core';
import { getImages } from '../functionalityFiles/assetBuilder';
import GameTimer from '../functionalityFiles/gameTimer';
import { InitializationController } from '../psudoServer/controllers/initializationController';
import { EncountersController } from '../psudoServer/controllers/encountersController';
import IEncounter from '../models/interfaces/Iencounter';


@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {

  gameTimer: GameTimer;

  encounter: IEncounter;


  _resetDB() {
    this._initializationController.resetDB();
    window.location.reload();
  }

  constructor(
    private _encountersController: EncountersController,
    private _initializationController: InitializationController,
    gameTimer: GameTimer
  ) {
    this.gameTimer = gameTimer;
    this.encounter = _encountersController.generateEncounter(1);

    this.loadImages();
  }

  ngOnInit(): void {

  }

  loadImages() {
    let i = 0;
    while (i < this.encounter.party.length) {
      this.encounter.party[i].imgs = getImages(this.encounter.party[i].classType);
      i++;
    }
    i = 0;
    while (i < this.encounter.enemies.length) {
      this.encounter.enemies[i].imgs = getImages(this.encounter.enemies[i].classType);
      i++;
    }
  }

}

