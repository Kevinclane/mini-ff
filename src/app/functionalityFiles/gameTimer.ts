import { Injectable } from "@angular/core";
import CallbackObject from "../models/implementors/callbackObject";

function executeCallbacks(callbacks: CallbackObject[]) {
    let i = 0;
    while (i < callbacks.length) {
        callbacks[i].callback(callbacks[i].state);
        i++;
    }
    i++;

}

@Injectable()
export default class GameTimer {

    callbacks: CallbackObject[] = [];

    intervalId;

    constructor() {
        this.intervalId = setInterval(() => executeCallbacks(this.callbacks), 60);
    }

    kill() {
        clearInterval(this.intervalId);
    }

    addCallback = (callback: CallbackObject) => {
        this.callbacks.push(callback);
    }

    removeCallback = (callback: CallbackObject) => {
        let index = this.callbacks.findIndex(c => c.id == callback.id);
        if (index != -1) {
            this.callbacks.splice(index, 1);
        }
    }

    getCallback(id: string) {
        return this.callbacks.find(cb => cb.id == id);
    }

    updateCallbackState = (id: string,) => {

    }

}