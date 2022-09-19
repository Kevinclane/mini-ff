import { Component, Input, OnInit } from '@angular/core';
import { calculateAnimationTime } from '../functionalityFiles/animationCalculator';
import GameTimer from '../functionalityFiles/gameTimer';
import { ActionCSS } from '../models/implementors/actionCSS';
import CallbackObject from '../models/implementors/callbackObject';
import { CallbackState } from '../models/implementors/callbackState';
import { Combatant } from '../models/implementors/combatant';
import { ImageObject } from '../models/implementors/imageObject';
import { MovementAnimation } from '../models/implementors/movementAnimation';
import ICallbackState from '../models/interfaces/IcallbackState';
import ICombatant from '../models/interfaces/Icombatant';
import { IImageObject } from '../models/interfaces/IimageObject';
import IMovementAnimation from '../models/interfaces/IMovementAnimation';

@Component({
  selector: 'app-combatant',
  templateUrl: './combatant.component.html',
  styleUrls: ['./combatant.component.css']
})
export class CombatantComponent implements OnInit {

  @Input() combatant: ICombatant;
  @Input() side: string = "";
  @Input() whosTurnId: string | undefined = "";

  activeTurn() {
    if (this.whosTurnId == this.combatant.id) {
      return true;
    } else {
      return false;
    }
  }


  //use this as a "type" reference  -  idle, attack, ect
  currentAnimationSet: string = "idle";
  currentImg: IImageObject = new ImageObject();
  index: number = 0;

  movementAnimation: IMovementAnimation = new MovementAnimation();
  actionCSS: ActionCSS = new ActionCSS();
  orientation: string = "";

  constructor(private _gameTimer: GameTimer) {
    this.combatant = new Combatant();
  }

  ngOnInit(): void {
    if (this.combatant) {
      let callbackObject = new CallbackObject(this.combatant.id, this.updateState.bind(this));
      if (this._gameTimer) {
        this._gameTimer.addCallback(callbackObject);
      }
    }
    if (this.side == "party") {
      this.orientation = "face-right";
    } else {
      this.orientation = "face-left";
    }
  }

  setAnimationSet(set: string): void {
    this.index = 0;
    this.currentAnimationSet = set;
  }

  returnToPosition() {
    let cb = this._gameTimer.getCallback(this.combatant.id);

    if (cb) {
      cb.state.action = "returnToPosition";
      // this.movementAnimation.returnAnimation();
      this._gameTimer.updateCallbackState(this.combatant.id, cb?.state);
    }

  }

  cycleImage() {
    switch (this.currentAnimationSet) {
      case "idle":
        this.currentImg = this.combatant.imgs.IDLE[this.index];

        if (this.index == this.combatant.imgs.IDLE.length - 1) {
          this.index = 0;
        } else {
          this.index++;
        }

        break;
      case "walk-to":
        this.currentImg = this.combatant.imgs.WALK[this.index];

        if (this.index == this.combatant.imgs.WALK.length - 1) {
          this.index = 0;
        } else {
          this.index++;
        }

        if (!this.movementAnimation.continueAnimation) {
          this.setAnimationSet("attack");
        }

        break;
      case "walk-back":
        // debugger
        this.currentImg = this.combatant.imgs.WALK[this.index];

        if (this.index == this.combatant.imgs.WALK.length - 1) {
          this.index = 0;
        } else {
          this.index++;
        }

        if (!this.movementAnimation.continueAnimation) {
          this.setAnimationSet("idle");
          this.movementAnimation.reset();
          this.toggleOrientation();
        }

        break;
      case "attack":
        this.currentImg = this.combatant.imgs.ATTACK[this.index];

        if (this.index == this.combatant.imgs.ATTACK.length - 1) {
          this.index = 0;

          this.returnToPosition();
        } else {
          this.index++;
        }

        break;
    }
  }

  toggleOrientation() {
    if (this.orientation == "face-right") {
      this.orientation = "face-left";
    } else {
      this.orientation = "face-right";
    }
  }

  updateState(state: ICallbackState) {
    switch (state.action) {
      case "standby":
        //intentionally doing nothing
        break;
      case "attack":
        this.setAnimationSet("walk-to");
        this.movementAnimation.startAnimation(state.actionSourceIndex, state.actionTargetIndex);
        this.actionCSS.startWalk(this.movementAnimation.movementData);
        state.action = "standby";
        // state.resetState();
        break;
      case "returnToPosition":
        this.setAnimationSet("walk-back");
        this.toggleOrientation();
        this.movementAnimation.returnAnimation();
        this.actionCSS.returnWalk(this.movementAnimation.movementData.time);
        state.action = "standby";
        break;
    }

    this.cycleImage();

  }

}
