import { Injectable } from "@angular/core";
import { CharactersRepository } from "../repos/charactersRepo";

@Injectable()
export class InitializationController {

    constructor(private _charactersRepository: CharactersRepository) {

    }

    initializeDB() {
        let allCharacters = this._charactersRepository.getAllCharacters();
        if (allCharacters == null) {
            this._charactersRepository.resetDB();
        }
    }

    resetDB() {
        this._charactersRepository.resetDB();
    }
}