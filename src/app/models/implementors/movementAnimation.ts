import { calculateAnimationTime } from "src/app/functionalityFiles/animationCalculator";
import IMovementAnimation from "../interfaces/IMovementAnimation";
import IMovementData from "../interfaces/IMovementData";
import { MovementData } from "./movementData";

export class MovementAnimation implements IMovementAnimation {
    sourceIndex: number | null = null;
    targetIndex: number | null = null;

    movementData: IMovementData = new MovementData();

    continueAnimation: boolean = false;

    constructor() { }

    async startAnimation(sourceIndex: number | null, targetIndex: number | null) {
        this.sourceIndex = sourceIndex;
        this.targetIndex = targetIndex;
        if (sourceIndex != null && targetIndex != null) {
            this.movementData = calculateAnimationTime(sourceIndex, targetIndex);
        }
        this.continueAnimation = true;

        await setTimeout(() => this.continueAnimation = false, this.movementData.time * 1000);
    }

    async returnAnimation() {
        this.movementData.x = 0;
        this.movementData.y = 0;
        this.continueAnimation = true;

        await setTimeout(() => this.reset(), this.movementData.time * 1000);
    }

    reset() {
        this.sourceIndex = null;
        this.targetIndex = null;
        this.continueAnimation = false;
        this.movementData.reset();
    }
}