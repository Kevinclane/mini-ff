import ICallbackState from "../interfaces/IcallbackState";

export class CallbackState implements ICallbackState {
    action: string = "";
    actionSourceIndex: number | null = null;
    actionTargetIndex: number | null = null;

    resetState() {
        this.action = "";
        this.actionSourceIndex = null;
        this.actionTargetIndex = null;
    }
}