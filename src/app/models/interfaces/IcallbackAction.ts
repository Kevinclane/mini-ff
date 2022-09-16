import IAction from "./Iaction";

export default interface ICallbackAction {
    [classType: string]: IAction[]

}