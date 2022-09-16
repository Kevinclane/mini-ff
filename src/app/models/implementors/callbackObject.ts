import ICallbackObject from "../interfaces/IcallbackObject";
import ICallbackState from "../interfaces/IcallbackState";
import { CallbackState } from "./callbackState";

export default class CallbackObject implements ICallbackObject {

    id: string;
    callback: Function;
    state: ICallbackState = new CallbackState();

    constructor(id: string, callback: Function) {
        this.id = id;
        this.callback = callback;
    }
}