import ICallbackState from "./IcallbackState";

export default interface ICallbackObject {
    id: string;
    callback: Function;
    state: ICallbackState
}