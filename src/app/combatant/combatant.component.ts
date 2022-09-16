import { Component, Input, OnInit } from '@angular/core';
import { calculateAnimationTime } from '../functionalityFiles/animationCalculator';
import CallbackObject from '../models/implementors/callbackObject';
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
  @Input() addCallback: Function | null = null;
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

  //Can likely move these all into their own Interface/object
  movementAnimation: IMovementAnimation = new MovementAnimation();

  constructor() {
    this.combatant = new Combatant();
  }

  ngOnInit(): void {
    if (this.combatant) {
      let callbackObject = new CallbackObject(this.combatant.id, this.updateState.bind(this));
      if (this.addCallback) {
        this.addCallback(callbackObject);
      }
    }
  }

  setAnimationSet(set: string): void {
    this.index = 0;
    this.currentAnimationSet = set;
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
      case "attack":
        this.currentImg = this.combatant.imgs.ATTACK[this.index];

        if (this.index == this.combatant.imgs.ATTACK.length - 1) {
          //likely have this chain into another function to have the character walk back before going idle
          this.setAnimationSet("idle");
        } else {
          this.index++;
        }

        break;
    }
  }

  async updateState(state: ICallbackState): Promise<void> {
    switch (state.action) {
      case "attack":
        this.setAnimationSet("walk-to");
        this.movementAnimation.startAnimation(state.actionSourceIndex, state.actionTargetIndex);
        state.resetState();
        break;
    }

    this.cycleImage();

  }

}
