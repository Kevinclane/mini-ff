import { Injectable } from "@angular/core";
import { CharactersRepository } from "../repos/charactersRepo";



@Injectable()
export class CharactersService {

    constructor(private _charactersRepository: CharactersRepository) {

    }

    getCharacterById(id: string) {
        return this._charactersRepository.getCharacterById(id);
    }

    getAllCharacters() {
        return this._charactersRepository.getAllCharacters();
    }
}