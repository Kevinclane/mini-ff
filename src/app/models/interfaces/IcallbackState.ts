
export default interface ICallbackState {
    action: string;
    actionSourceIndex: number | null;
    actionTargetIndex: number | null;

    resetState: Function;
}