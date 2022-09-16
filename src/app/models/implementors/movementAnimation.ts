import { calculateAnimationTime } from "src/app/functionalityFiles/animationCalculator";
import IMovementAnimation from "../interfaces/IMovementAnimation";

export class MovementAnimation implements IMovementAnimation {
    sourceIndex: number | null = null;
    targetIndex: number | null = null;
    continueAnimation: boolean = false;
    animationTimer: number = 0;

    constructor() { }

    async startAnimation(sourceIndex: number | null, targetIndex: number | null) {
        this.sourceIndex = sourceIndex;
        this.targetIndex = targetIndex;
        if (sourceIndex != null && targetIndex != null) {
            this.animationTimer = calculateAnimationTime(sourceIndex, targetIndex);
        }
        this.continueAnimation = true;

        await setTimeout(() => this.reset(), this.animationTimer * 1000);
    }

    reset() {
        this.sourceIndex = null;
        this.targetIndex = null;
        this.continueAnimation = false;
        this.animationTimer = 0;
    }
}