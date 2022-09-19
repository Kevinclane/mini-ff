import IMovementData from "../interfaces/IMovementData";

export class MovementData implements IMovementData {
    time;
    x;
    y;

    constructor() {
        this.time = 0;
        this.x = 0;
        this.y = 0;
    }

    reset() {
        this.time = 0;
        this.x = 0;
        this.y = 0;
    }
}