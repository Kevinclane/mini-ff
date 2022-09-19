import IMovementData from "./IMovementData";

export default interface IMovementAnimation {
    sourceIndex: number | null;
    targetIndex: number | null;
    continueAnimation: boolean;

    movementData: IMovementData;

    startAnimation: Function;
    returnAnimation: Function;
    reset: Function;


}