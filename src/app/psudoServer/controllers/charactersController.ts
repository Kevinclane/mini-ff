import { Injectable } from "@angular/core";
import { CharactersService } from "../services/charactersService";

@Injectable()
export class CharactersController {
    constructor(private _charcatersService: CharactersService) {

    }

    getCharacterById(id: string) {
        return this._charcatersService.getCharacterById(id);
    }

    getAllCharacters() {
        return this._charcatersService.getAllCharacters();
    }

}