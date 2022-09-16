
export default interface IMovementAnimation {
    sourceIndex: number | null;
    targetIndex: number | null;
    continueAnimation: boolean;
    animationTimer: number;

    startAnimation: Function;
    reset: Function;


}